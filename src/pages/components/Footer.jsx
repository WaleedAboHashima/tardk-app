import React from "react";
import { Box, Typography, Link } from "@mui/material"

function Footer() {
    return (
    <Box width="100%" display={'flex'} flexDirection={'column'} height="512px" sx={{ direction: "rtl" }}>
      <Box p={3}>
        <Typography variant="h6">
          .هذا الموقع هو منصة لتوصيل الطرود، حيث يمكن للمستخدمين إرسال الطرود
          واختيار طريقة التوصيل المفضلة لديهم
        </Typography>
        <Typography variant="h6">
        .يمكن للمستخدمين أيضًا تحديد عنوان التسليم وتتبع الحالة الحالية للشحنة في الوقت الحقيقي
        </Typography>
          </Box>
          <Box p={3} display={'flex'} gap={15} justifyContent={'space-between'}>
              <Box width={'150px'} height={'200px'}  display={'flex'} flexDirection={'column'} textAlign={'center'} p={1}>
                  <Typography variant="h6" fontWeight={'bold'} py={2}>تواصل معنا عبر</Typography>
                  <Box display={'flex'} gap={1} justifyContent={'center'}>
                      <img style={{cursor: 'pointer'}} onClick={() => ''} src="/assets/whatsAppLogo.png" alt="companylogos" />
                        <img style={{ cursor: 'pointer' }} onClick={() => ''} src={"/assets/facebookLogo.png"} alt="companylogos" />
                      <img style={{cursor: 'pointer'}} onClick={() => ''} src="/assets/instaLogo.png"  alt="companylogos"/>
                  </Box>
              </Box>
              <Box width={'300px'} height={'200px'}  display={'flex'} flexDirection={'column'} textAlign={'center'} p={1}>
                  <Typography variant="h6" fontWeight={'bold'} py={2}>روابط سريعة</Typography>
                  <Box display={'flex'} gap={1} justifyContent={'center'} flexDirection={'column'}>
                      <Link sx={{color: 'black', cursor: 'pointer'}} underline="none">الشروط والأحكام</Link>
                      <Link sx={{color: 'black', cursor: 'pointer'}} underline="none">جميع السائقين</Link>
                      <Link sx={{color: 'black', cursor: 'pointer'}} underline="none">جميع الطرود</Link>
                  </Box>
              </Box>
              <Box width={'300px'} height={'200px'}  display={'flex'} flexDirection={'column'} textAlign={'center'} p={1}>
                  <Typography variant="h6" fontWeight={'bold'} py={2}>وسائل الدفع المتاحة</Typography>
                  <Box display={'flex'} gap={3} justifyContent={'center'} height={'26px'}>
                      <img height={'26px'} src="/assets/PayPal.png"  alt="companylogos"/>
                      <img height={'30px'} src="/assets/Master Card.png" alt="companylogos" />
                      <img height={'26px'} src="/assets/Visa.png" alt="companylogos" />
                  </Box>
              </Box>
              <Box width={'auto'} height={'200px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <img src="/assets/TARDK.png"  alt="Tardk"/>
              </Box>
          </Box>
    </Box>
  );
}

export default Footer;
