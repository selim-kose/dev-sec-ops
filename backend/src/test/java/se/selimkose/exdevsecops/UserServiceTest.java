package se.selimkose.exdevsecops;
import static org.mockito.Mockito.*;
import static org.assertj.core.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import se.selimkose.exdevsecops.dao.UserRepository;
import se.selimkose.exdevsecops.entity.User;
import se.selimkose.exdevsecops.service.UserService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void shouldSaveUserSuccessfully() {
        // Arrange
        UUID id = UUID.randomUUID();
        User user = new User(id, "John", "Doe", "test@example.com");
        when(userRepository.save(any(User.class))).thenReturn(user);

        User savedUser = userService.addUser(user);

        assertThat(savedUser).isNotNull();
        assertThat(savedUser.getEmail()).isEqualTo("test@example.com");
        verify(userRepository, times(1)).save(user);
    }

    @Test
    void shouldReturnAllUsers() {
        // Arrange
        User user1 = new User(UUID.randomUUID(), "Alice", "Smith", "alice@example.com");
        User user2 = new User(UUID.randomUUID(), "Bob", "Jones", "bob@example.com");
        when(userRepository.findAll()).thenReturn(List.of(user1, user2));

        // Act
        List<User> users = userService.findAllUsers();

        // Assert
        assertThat(users).hasSize(2);
        assertThat(users).containsExactly(user1, user2);
        verify(userRepository, times(1)).findAll();
    }

    @Test
    void shouldDeleteUserSuccessfully() {
        // Arrange
        UUID id = UUID.randomUUID();
        doNothing().when(userRepository).deleteById(id);

        // Act
        String response = userService.deleteUser(id);

        // Assert
        assertThat(response).isEqualTo("User deleted");
        verify(userRepository, times(1)).deleteById(id);
    }

    @Test
    void shouldUpdateUserSuccessfully() {
        // Arrange
        UUID id = UUID.randomUUID();
        User existingUser = new User(id, "OldFirst", "OldLast", "old@example.com");
        User updateInfo = new User(null, "NewFirst", "NewLast", "new@example.com");

        when(userRepository.findById(id)).thenReturn(Optional.of(existingUser));
        when(userRepository.save(any(User.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // Act
        User updatedUser = userService.updateUser(id, updateInfo);

        // Assert
        assertThat(updatedUser.getFirstName()).isEqualTo("NewFirst");
        assertThat(updatedUser.getLastName()).isEqualTo("NewLast");
        assertThat(updatedUser.getEmail()).isEqualTo("new@example.com");
        verify(userRepository, times(1)).save(any(User.class));
    }

    @Test
    void shouldReturnEmptyListWhenNoUsersExist() {
        // Arrange: Tell the mock to return an empty list
        when(userRepository.findAll()).thenReturn(List.of());

        // Act: Call the service method
        List<User> users = userService.findAllUsers();

        // Assert: Check that the result is an empty list
        assertThat(users).isEmpty();
        verify(userRepository, times(1)).findAll();
    }
}