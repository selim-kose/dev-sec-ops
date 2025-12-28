package se.selimkose.exdevsecops.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import se.selimkose.exdevsecops.dao.UserRepository;
import se.selimkose.exdevsecops.entity.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class UserService {

    UserRepository userRepository;

    public List<User> findAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    public User addUser(User user){
        return userRepository.save(user);
    }

    public String deleteUser(UUID id) {
         userRepository.deleteById(id);
         return "User deleted";
    }

    public User updateUser(UUID id , User newUser) {
        Optional<User> previousUser = userRepository.findById(id);

        if(previousUser.isPresent()) {
            User previousUserUnwrapped = previousUser.get();
            previousUserUnwrapped.setFirstName(newUser.getFirstName());
            previousUserUnwrapped.setLastName(newUser.getLastName());
            previousUserUnwrapped.setEmail(newUser.getEmail());

            return userRepository.save(previousUserUnwrapped);
        }
        return null;
    }
}
