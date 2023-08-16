import TopNav from '../components/TopNav';
import Footer from '../components/Footer';

const PolicyPage = () => {
  return (
    <div className='font-inter'>
      <TopNav />
      <div className='flex flex-col md:flex-row md:justify-between  px-[16px] md:px-[112px] py-[64px] md:py-[96px]'>
        <div className='flex flex-col items-start md:flex-[0.70]'>
          <p className='text-[#00359E] font-semibold text-[14px] leading-[20px] md:text-base h-[20px] md:h-[24px] md:mb-[5px]'>
            Current as of 20 Jan 2022
          </p>
          <p className='font-semibold text-[36px] md:text-[48px] leading-[44px] md:leading-[60px] text-[#101828] my-[10px] md:my-0'>
            Privacy Policy
          </p>
          <p className='md:hidden'>
            By accessing our website, you are agreeing to be bound by these
            terms of service, and agree that you are responsible for compliance
            with any applicable local laws.
          </p>
          <input
            className='w-[343px] h-[44px] md:w-[320px] md:h-[48px] rounded-lg bg-[#fff] border-2 border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583] py-[10px] md:py-[12px] px-[14px] mt-[32px] '
            placeholder='search'
          />
        </div>
        <div className='md:flex-[0.30]'>
          <p className='hidden md:flex justify-start md:mt-[12px]'>
            Thank you for choosing Pishon for your investment needs. We are
            committed to protecting your privacy and ensuring that your personal
            information is secure. This Privacy Policy outlines how we collect,
            use, and disclose your personal information.
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-start px-[16px] md:px-[112px] py-[64px] md:py-[96px] '>
        <span>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            What information do we collect?
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            We collect personal information about you when you register for our
            services, create an account, invest in real estate, or communicate
            with us. The information we collect may include your name, address,
            phone number, email address, financial information (such as bank
            account or credit card information), investment preferences, and
            other information you choose to provide to us. When you make an
            investment, we may also collect information about the property in
            which you are investing. This information may include the property
            address, purchase price, and other details related to the
            investment.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            How do we use your information?
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            We use your personal information to provide you with our services,
            process your investments, and communicate with you. For example, we
            may use your information to send you transactional emails regarding
            your investments, provide customer support, and respond to your
            inquiries or requests. We may also use your information to send you
            promotional materials about our services, such as email newsletters
            or targeted advertisements. If you do not wish to receive these
            materials, you may choose to opt out by following the instructions
            in our marketing emails. In addition, we may use your information to
            analyze and improve our services. This may include conducting
            research on user behavior and preferences, as well as testing new
            features and functionality.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            How do we share your information?
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            We do not sell or rent your personal information to third parties.
            However, we may share your information with select partners in order
            to facilitate your investments. For example, we may share your
            information with real estate developers or other partners involved
            in the investments you make. We may also share your information with
            service providers who help us operate our business, such as payment
            processors, marketing agencies, or customer support providers. These
            service providers are contractually obligated to maintain the
            confidentiality and security of your information. Finally, we may
            disclose your information as required by law, such as to comply with
            a subpoena or other legal process, or to protect the rights,
            property, or safety of our users or others.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Date Security
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            We take data security seriously and have implemented reasonable
            measures to protect your personal information from unauthorized
            access, use, or disclosure. These measures include physical,
            technical, and administrative safeguards, such as firewalls,
            encryption, and access controls. However, no data transmission over
            the internet or storage system can be guaranteed to be 100% secure.
            Therefore, while we strive to protect your information, we cannot
            guarantee its absolute security.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Data Retention
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            We retain your personal information for as long as necessary to
            provide you with our services and comply with legal obligations. We
            may also retain certain information for a longer period of time if
            it is necessary for legitimate business purposes, such as resolving
            disputes or enforcing our agreements.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Your Choices
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            You have certain choices regarding how we use and disclose your
            personal information. For example, you may choose to opt out of
            receiving promotional materials from us by following the
            instructions in our marketing emails. You may also request that we
            delete your personal information by contacting us. However, we may
            be required by law to retain certain information for a specified
            period of time.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Children’s Privacy
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            Our services are not intended for children under the age of 18, and
            we do not knowingly collect personal information from them. If you
            are under the age of 18, please do not use our services or provide
            any personal information to us.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Changes to this policy
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the updated policy on our
            website.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Contact us
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            If you have any questions or concerns about our Privacy Policy,
            please contact us at <strong>contact@pishon.org</strong> <br />
            <br /> By using our services, you consent to the collection, use,
            and disclosure of your personal information as described in this
            Privacy Policy.
          </p>
        </span>
      </div>
      <Footer />{' '}
    </div>
  );
};

export default PolicyPage;
