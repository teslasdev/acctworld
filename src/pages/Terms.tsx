const TermsAndConditions = () => {
  return (
    <div className="flex max-w-[1440px] mx-auto py-24 justify-center items-center p-4">
      <div className="rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
        <div className="space-y-4 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Modification of Terms</h2>
            <p>
              Acctworld reserves the right to modify any or all parts of these Terms and
              Conditions at any time, as per our discretion. Your acceptance to new Terms
              will become effective upon your continued use of our services. If you wish to
              terminate your acceptance of these Terms, or desire to cease using our
              services, you may simply discontinue using the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Prohibited Activities</h2>
            <p>
              Use of our services to engage in or promote illegal activities is strictly
              prohibited. Misuse of provided services will result in immediate
              discontinuation of all services indefinitely, regardless of payment status.
              We provide services only to individuals who are at or above 13 years of age.
              If any user is found to be under this age, we will immediately terminate all
              services and accounts associated with that user.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Accounts</h2>
            <p>
              You are responsible for providing accurate and complete information upon
              establishment of account. You are responsible for maintaining adequate
              security measures and control of any and all usernames, passwords, or other
              information associated with your account. Furthermore, you are responsible
              for keeping your account information up-to-date at all times.
            </p>
            <p>
              Creation of multiple accounts to avoid a ban from our services is not allowed,
              and will result in termination of all accounts created for such purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Phone Numbers</h2>
            <p>
              Any phone numbers (or “numbers”) provided to you via our services are not
              your property or reserved strictly for your private use. Sharing these
              numbers to third parties is prohibited, considered a breach of these Terms,
              and may lead to immediate termination of your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Purchases, Cancellation, and Refunds
            </h2>
            <p>
              We accept a variety of payment methods, which may include Credit/Debit cards
              and certain Cryptocurrencies. We reserve the right to modify methods of
              payment at our discretion and may choose to discontinue certain methods at
              any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Delivery</h2>
            <p>
              Delivery of services is provided immediately upon activation of user accounts
              and successful payment. No physical product is provided as part of the
              services provided.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Warranties Disclaimer</h2>
            <p>
              We make no warranties that the Service (1) will be continuously available or
              uninterrupted or (2) will be error free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Severability Clause</h2>
            <p>
              If any provision of these Terms is determined to be invalid, illegal, or
              unenforceable, it shall not affect the enforceability of any other provision
              of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us.</p>
          </section>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Rules</h1>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Always secure your accounts shortly after logging in to ensure their safety.</li>
          <li>Accounts cannot be replaced once the password has been changed.</li>
          <li>
            We provide replacements for faulty accounts, but only if the issue is on our
            end and not due to usage.
          </li>
          <li>These regulations are subject to change at any time without prior notice.</li>
          <li>
            Use of obscene language towards our administrators may result in refusal of
            service.
          </li>
          <li>Ignorance of the rules does not exempt users from accountability.</li>
          <li>
            Our technical support team is available 24/7 to address any issues or
            concerns.
          </li>
          <li>
            All accounts undergo thorough checks using our private program and mobile
            proxy to ensure 100% validity.
          </li>
          <li>
            Accounts cannot be refunded but may be replaced if found to be faulty,
            provided all other guidelines are followed.
          </li>
          <li>
            The store holds no responsibility for any account activity; the duration of an
            account's functionality depends on its usage. We do not offer replacements or
            refunds for suspended, disabled, or logged out accounts after successful
            login.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
