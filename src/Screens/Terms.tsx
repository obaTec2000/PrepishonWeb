import TopNav from '../components/TopNav';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className='font-inter'>
      <TopNav />
      <div className='flex flex-col md:flex-row md:justify-between  px-[16px] md:px-[112px] py-[64px] md:py-[96px]'>
        <div className='flex flex-col items-start md:flex-[0.70]'>
          <p className='text-[#00359E] font-semibold text-[14px] leading-[20px] md:text-base h-[20px] md:h-[24px] md:mb-[5px]'>
            Current as of 20 Jan 2022
          </p>
          <p className='font-semibold text-[36px] md:text-[48px] leading-[44px] md:leading-[60px] text-[#101828] my-[10px] md:my-0'>
            Terms of Service
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
            Thank you for choosing Pishon for your fractional real estate
            investment needs. The following is a detailed Terms of Service
            agreement that outlines the terms and conditions governing your use
            of our services:
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-start px-[16px] md:px-[112px] py-[64px] md:py-[96px] '>
        <span>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Acceptance of Terms
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            By using Pishon's services, you agree to comply with and be bound by
            these Terms of Service. If you do not agree to these terms, please
            do not use our services.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Description of Services
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            Pishon is a platform that provides individuals, including those with
            low purchasing power, with the opportunity to invest in fractional
            real estate. Through our platform, users can pool their funds with
            other investors to participate in real estate investments that may
            have previously been inaccessible due to high costs.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Eligibility
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            To use our services, you must be at least 18 years old and have the
            legal capacity to enter into a binding agreement. By using Pishon,
            you represent and warrant that you meet these eligibility
            requirements.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Registration and Account
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            In order to access certain features and functionality of our
            services, you may need to create a user account. During the
            registration process, you agree to provide accurate, current, and
            complete information. You are responsible for maintaining the
            confidentiality of your account credentials and are solely
            responsible for any activity that occurs under your account. Please
            notify us immediately of any unauthorized access or use of your
            account.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Investment Risks and Disclosures
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            Investing in real estate, including fractional ownership, involves
            inherent risks. Pishon provides investment opportunities, but we do
            not guarantee the performance, success, or profitability of any
            investment. The value of investments can fluctuate, and there is no
            assurance of returns or profit. It is important to thoroughly review
            the associated investment documentation, including prospectuses or
            offering memoranda, and understand the risks before making any
            investment decisions.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Investment Decisions
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            As a user of Pishon's services, you are solely responsible for your
            investment decisions. We do not provide investment advice or make
            recommendations regarding specific investments. Our platform serves
            as a facilitator, connecting users with investment opportunities. It
            is crucial that you conduct your own research, assess your financial
            situation, investment objectives, and risk tolerance, and consult
            with your own advisors before making any investment through Pishon.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Fees and Expenses
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            Pishon charges fees for the use of our services. These fees may
            include transaction fees, management fees, or other charges
            associated with your investments. The specific fees and expenses
            applicable to each investment opportunity will be disclosed to you
            prior to making an investment. It is important to review and
            understand these fees before proceeding with any investment.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Communication and Notifications
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            By using Pishon, you consent to receive communications from us,
            including transactional emails, account updates, and promotional
            materials. We may also provide notifications within your account or
            through other means. You may opt out of receiving promotional
            materials by following the instructions provided in the
            communication. Please note that even if you opt out of promotional
            materials, you may still receive transactional or account-related
            communications from us.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Intellectual Property Rights
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            All intellectual property rights in the Pishon platform, including
            trademarks, logos, and content, are owned by Pishon or our
            licensors. These intellectual property rights are protected by
            copyright, trademark, and other laws. You may not use, reproduce,
            modify, or distribute any of our intellectual property without our
            prior written consent.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Termination
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            We may, at our discretion, suspend or terminate your access to
            Pishon's services at any time and for any reason, without prior
            notice or liability. Upon termination, your right to use our
            services will cease immediately. You may also terminate your account
            at any time by contacting us or following the instructions within
            your account settings.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Disclaimer of Warranties
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            Pishon's services are provided on an "as is" and "as available"
            basis without warranties of any kind, whether express, implied, or
            statutory. We do not warrant that our services will be
            uninterrupted, error-free, or free from harmful components. We
            disclaim all warranties, including but not limited to warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Limitation of Liability
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            To the maximum extent permitted by applicable law, Pishon and its
            affiliates, officers, directors, employees, agents, and partners
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, including but not limited to
            loss of profits, data, or other intangible losses, arising out of or
            in connection with your use of our services, regardless of the cause
            of action or theory of liability (contract, tort, or otherwise).
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Governing Law and Dispute Resolution
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            These Terms shall be governed by and construed in accordance with
            the laws of the jurisdiction where Pishon is located. Any disputes
            arising out of or in connection with these Terms shall be resolved
            through binding arbitration conducted by a neutral arbitrator,
            unless otherwise agreed upon by the parties.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Changes to the Terms of Service
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            Pishon reserves the right to modify or update these Terms at any
            time without prior notice. Any changes will be effective upon
            posting the revised Terms on our website or notifying you through
            other means. It is your responsibility to review the Terms
            periodically. Continued use of our services after the effective date
            of any modifications constitutes acceptance of the updated Terms.
          </p>
        </span>
        <span className='mt-[32px]'>
          <p className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[38px] text-[#101828]'>
            Entire Agreement
          </p>
          <p className='w-[343px] md:w-[720px] font-normal text-base md:text-[18px] md:leading-[28px] text-[#475467] mt-[16px] md:mt-[20px]'>
            {' '}
            These Terms constitute the entire agreement between you and Pishon
            regarding your use of our services and supersede any prior
            agreements or understandings, whether written or oral, relating to
            the subject matter herein.
            <br /> <br /> If you have any questions or concerns about these
            Terms, please contact us at <strong>
              contact@pishon.org
            </strong>. <br /> <br /> By using Pishon's services, you acknowledge
            that you have read, understood, and agreed to be bound by these
            Terms of Service.
          </p>
        </span>
      </div>
      <Footer />{' '}
    </div>
  );
};

export default Terms;
