import ContactForm from '@/components/ContactForm/ContactForm';


export const metadata = {
    title: 'Страница сообщения',
    url: "https://cad-exchanger-client-kotofeus-projects.vercel.app/contact",
    openGraph: {
      title: 'Страница сообщения',
    },
  }
 
  
const ContactPage: React.FC = () => {
    return (
        <div>
            <ContactForm />
        </div>
    );
};

export default ContactPage;