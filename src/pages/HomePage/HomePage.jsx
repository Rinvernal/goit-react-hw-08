import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        backgroundColor: '#f3e5f5', 
        textAlign: 'center',
        padding: '16px',
      }}
    >
      <Typography variant="h3" sx={{ color: '#6A1B9A', marginBottom: '16px' }}>
        Welcome to the Contact Manager
      </Typography>
      <Typography variant="h6" sx={{ color: '#8E24AA', marginBottom: '24px', maxWidth: '600px' }}>
        This application helps you keep track of your contacts easily and efficiently.
        You can add, search, and manage your contacts in just a few clicks!
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          component={Link}
          to="/contacts"
          variant="contained"
          color="secondary"
          size="large"
        >
          Manage Contacts
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage