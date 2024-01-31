"use client";
import { useChangeLang } from "@/store/store";
import { Box, Container, Typography } from "@mui/material";

export const PrivacyPolicyPage = () => {
  const lang = useChangeLang((state) => state.lang);
  return (
    <Container maxWidth="xl" sx={{
        paddingBottom: "20px",
        paddingTop: "20px"
    }}>
      <Box
        component={"div"}
        sx={{
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "15px"
            
          }}
          variant="h5"
          component={"h2"}
        >
          {lang === "en" ? "Privacy Policy" : "Политика конфиденциальности"}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px", fontWeight: "bold" },
            marginBottom: "10px"
          }}
          variant="body2"
          component={"p"}
        >
          {lang === "en"
            ? "This privacy policy describes how we collect, use and protect your personal information on our website."
            : "Эта политика конфиденциальности описывает, как мы собираем, используем и защищаем вашу личную информацию на нашем сайте."}
        </Typography>
      </Box>
      <Box
        component={"div"}
        sx={{
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "15px"
          }}
          variant="h5"
          component={"h2"}
        >
          {lang === "en" ? "Information gathering" : "Сбор информации"}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px", fontWeight: "bold" },
            marginBottom: "10px"
          }}
          variant="body2"
          component={"p"}
        >
          {lang === "en"
            ? "We collect information when you register on the site, fill out a form, place an order or interact with our services. We also receive information automatically when you use the site through technologies such as cookies."
            : "Мы собираем информацию, когда вы регистрируетесь на сайте, заполняете форму, делаете заказ или взаимодействуете с нашими услугами. Мы также получаем информацию автоматически при использовании сайта через технологии, такие как куки."}
        </Typography>
      </Box>
      <Box
        component={"div"}
        sx={{
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "15px"
          }}
          variant="h5"
          component={"h2"}
        >
          {lang === "en"
            ? "Utilization of information"
            : "Использование информации"}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px", fontWeight: "bold" },
            marginBottom: "10px"
          }}
          variant="body2"
          component={"p"}
        >
          {lang === "en"
            ? "We use your information to process orders, provide services, improve the site and personalize your experience. We may also use your information to contact you about important notices and updates."
            : "Мы используем вашу информацию для обработки заказов, предоставления услуг, улучшения работы сайта и персонализации вашего опыта. Мы также можем использовать вашу информацию для связи с вами относительно важных уведомлений и обновлений."}
        </Typography>
      </Box>
      <Box
        component={"div"}
        sx={{
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "15px"
          }}
          variant="h5"
          component={"h2"}
        >
          {lang === "en" ? "Protection of information" : "Защита информации"}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px", fontWeight: "bold" },
            marginBottom: "10px"
          }}
          variant="body2"
          component={"p"}
        >
          {lang === "en"
            ? "We take security measures to protect your personal information from unauthorized access, alteration, disclosure or destruction. Please remember, however, that no Internet transmission methodology or electronic storage method is 100% secure."
            : "Мы принимаем меры безопасности для защиты вашей личной информации от несанкционированного доступа, изменения, раскрытия или уничтожения. Однако помните, что никакая методика передачи через Интернет или метод электронного хранения не является 100% безопасным."}
        </Typography>
      </Box>
      <Box
        component={"div"}
        sx={{
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "15px"
          }}
          variant="h5"
          component={"h2"}
        >
          {lang === "en"
            ? "Disclosures to third parties"
            : "Раскрытие информации третьим лицам"}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px", fontWeight: "bold" },
            marginBottom: "10px"
          }}
          variant="body2"
          component={"p"}
        >
          {lang === "en"
            ? "We do not sell, trade or share your personal information with third parties without your consent, except as necessary to provide services or fulfill legal requirements."
            : "Мы не продаем, не обмениваем и не передаем вашу личную информацию третьим лицам без вашего согласия, за исключением случаев, когда это необходимо для предоставления услуг или выполнения законных требований."}
        </Typography>
      </Box>
      <Box
        component={"div"}
        sx={{
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "15px"
          }}
          variant="h5"
          component={"h2"}
        >
          {lang === "en" ? "Consent" : "Согласие"}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px", fontWeight: "bold" },
            marginBottom: "10px"
          }}
          variant="body2"
          component={"p"}
        >
          {lang === "en"
            ? "By using our website, you agree to our privacy policy."
            : "Используя наш сайт, вы соглашаетесь с нашей политикой конфиденциальности."}
        </Typography>
      </Box>
      <Box
        component={"div"}
        sx={{
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "15px"
          }}
          variant="h5"
          component={"h2"}
        >
          {lang === "en" ? "Policy changes" : "Изменения в политике"}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px", fontWeight: "bold" },
            marginBottom: "10px"
          }}
          variant="body2"
          component={"p"}
        >
          {lang === "en"
            ? "We may update this privacy policy from time to time. We encourage you to check this page periodically to stay informed of changes."
            : "Мы можем время от времени обновлять эту политику конфиденциальности. Мы рекомендуем вам проверять эту страницу периодически, чтобы быть в курсе изменений."}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px", fontWeight: "bold" },
            marginBottom: "10px"
          }}
          variant="body2"
          component={"p"}
        >
          {lang === "en"
            ? "If you have any questions about this privacy policy, please contact us."
            : "Если у вас есть вопросы относительно этой политики конфиденциальности, свяжитесь с нами."}
        </Typography>
      </Box>
    </Container>
  );
};
