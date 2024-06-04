// pages/404.js
import { Box } from '@mui/material';
import backgroundImage from '../../assets/404.png'; // Update the path to the actual image path

const Page = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#333',
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        zIndex: 1,
        filter: 'grayscale(100%)',
      }}
    >
      {/* <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: -1,
        }}
      />
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        JUSYOL
        <br />
        جس يول
      </Typography>
      <Typography variant="h1" sx={{ fontSize: '5rem', marginBottom: 2 }}>
        خطأ 404
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 4 }}>
        هذه الصفحة غير موجودة. من فضلك قم بالرجوع إلى الصفحة الرئيسية.
      </Typography>
      <Link href="/" passHref>
        <Button
          variant="contained"
          color="primary"
          sx={{ fontSize: '16px', padding: '10px 20px' }}
        >
          الرجوع للرئيسية
        </Button>
      </Link> */}
    </Box>
  );
};

export default Page;
