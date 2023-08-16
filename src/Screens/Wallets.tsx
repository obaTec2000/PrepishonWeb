import {useState} from 'react'
import Modals from '../components/Modals'
import FundWllet from '../components/Modals/FundWllet'
import WithdrawSuccess from '../components/Modals/WithdrawSuccess'
import FundingSuccess from '../components/Modals/FundingSuccess'
import TransactionSuccess from '../components/Modals/TransactionSuccess'
import BankDetails from '../components/Modals/BankDetails'
import WithdrawFunds from '../components/Modals/WithdrawFunds'
import Loading from '../components/Modals/Loading'
import DirectBankTransfer from '../components/Modals/DirectBankTransfer'

const Wallet = () => {
  const [isFundWalletModalOpen, setIsFundWalletOpen] = useState(false)
  const [isWithdrawSuccessModalOpen, setIsWithdrawSuccessOpen] = useState(false);
  const [isFundingSuccessModalOpen, setIsFundingSuccessOpen] = useState(false);
  const [isTransactionSuccessModalOpen, setIsTransactionSuccessOpen] = useState(false);
  const [isBankDetailsModalOpen, setIsBankDetailOpen] = useState(false);
  const [isWithdrawFundsModalOpen, setIsWithdrawFundsOpen] = useState(false);
  const [isLoadingModalOpen, setIsLoadingOpen] = useState(false);
  const [isDirectBankModalOpen, setIsDirectBankModalOpen] = useState(false);
  
  
  return (
    <div>
      <button>
        <Modals
          isOpen={isFundWalletModalOpen}
          closeModal={() => setIsFundWalletOpen(false)}
          openModal={() => setIsFundWalletOpen(true)}
          title="Wallet">
          <FundWllet onCancel={() => null} />
        </Modals>
      </button>
      <button>
        <Modals
          isOpen={isWithdrawSuccessModalOpen}
          closeModal={() => setIsWithdrawSuccessOpen(false)}
          openModal={() => setIsWithdrawSuccessOpen(true)}
          title="WithdrawSuccess">
          <WithdrawSuccess onCancel={() => null} />
        </Modals>
      </button>
      <button>
        <Modals
          isOpen={isFundingSuccessModalOpen}
          closeModal={() => setIsFundingSuccessOpen(false)}
          openModal={() => setIsFundingSuccessOpen(true)}
          title="FundingSuccess">
          <FundingSuccess />
        </Modals>
      </button>
      <button>
        <Modals
          isOpen={isTransactionSuccessModalOpen}
          closeModal={() => setIsTransactionSuccessOpen(false)}
          openModal={() => setIsTransactionSuccessOpen(true)}
          title="TransactionSuccess">
          <TransactionSuccess onCancel={() => null} />
        </Modals>
      </button>
      <button>
        <Modals
          isOpen={isBankDetailsModalOpen}
          closeModal={() => setIsBankDetailOpen(false)}
          openModal={() => setIsBankDetailOpen(true)}
          title="BankDetails">
          <BankDetails onCancel={() => null} />
        </Modals>
      </button>
      <button>
        <Modals
          isOpen={isWithdrawFundsModalOpen}
          closeModal={() => setIsWithdrawFundsOpen(false)}
          openModal={() => setIsWithdrawFundsOpen(true)}
          title="WithdrawFunds">
          <WithdrawFunds onCancel={() => null} />
        </Modals>
      </button>
      <button>
        <Modals
          isOpen={isLoadingModalOpen}
          closeModal={() => setIsLoadingOpen(false)}
          openModal={() => setIsLoadingOpen(true)}
          title="Loading">
          <Loading />
        </Modals>
      </button>
      <button>
        <Modals
          isOpen={isDirectBankModalOpen}
          closeModal={() => setIsDirectBankModalOpen(false)}
          openModal={() => setIsDirectBankModalOpen(true)}
          title="DirectBankTransfer">
          <DirectBankTransfer />
        </Modals>
      </button>
    </div>
  );
}

export default Wallet
