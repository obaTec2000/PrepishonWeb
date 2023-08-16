import { useState } from "react";
import Modals from "../components/Modals";
import SendToBeneficiaries from "../components/Modals/SendToBeneficiaries";
import SendToNewRecipient from "../components/Modals/SendToNewRecipient";

const Beneficiaries = () => {
  const [isBeneficiaryModalOpen, setIsBeneficiaryOpen] = useState(false);
  const [isNewRecipientModalOpen, setIsNewRecipientOpen] = useState(false);
  return (
    <div>
      <button>
        <Modals
          isOpen={isBeneficiaryModalOpen}
          closeModal={() => setIsBeneficiaryOpen(false)}
          openModal={() => setIsBeneficiaryOpen(true)}
          title="Send TO Beneficiary">
          <SendToBeneficiaries onCancel={() => null} />
        </Modals>
      </button>
      <button>
        <Modals
          isOpen={isNewRecipientModalOpen}
          closeModal={() => setIsNewRecipientOpen(false)}
          openModal={() => setIsNewRecipientOpen(true)}
          title="Send TO New Recipient">
          <SendToNewRecipient onCancel={() => null} />
        </Modals>
      </button>
    </div>
  );
};

export default Beneficiaries;
