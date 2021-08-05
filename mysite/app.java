import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class app {
    public static void main(String[] args) {
        String connectionUrl = "jdbc:sqlserver://cryptonate.database.windows.net:1433;database=Cryptonate_db;user=Cryptonate@cryptonate;password=666dcd94-efce-11eb-9a03-0242ac130003;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;";

        try (Connection connection = DriverManager.getConnection(connectionUrl);) {
            System.out.println("Connection established!");
        }
        // Handle any errors that may have occurred.
        catch (SQLException e) {
            System.out.println("Connection failed!");
            e.printStackTrace();
        }
    }
}