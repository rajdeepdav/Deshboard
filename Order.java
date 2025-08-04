import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;

@Entity
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long customerId;

    @ElementCollection
    private List<String> items;

    private Double totalAmount;

    // Getters and Setters (or use Lombok @Data)
}