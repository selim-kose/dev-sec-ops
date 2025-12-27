package se.selimkose.exdevsecops.dao;

import org.springframework.data.repository.CrudRepository;
import se.selimkose.exdevsecops.entity.User;

import java.util.UUID;

public interface UserRepository extends CrudRepository<User, UUID> {

}
