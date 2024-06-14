const ContactPage = () => {
  return (
    <div style={styles.container}>
      <h1>Contact Information</h1>
      <p>Email: client@example.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
};
export default ContactPage;
