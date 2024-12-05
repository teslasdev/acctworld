import React from "react";

const FaqSection = () => {
  const faqData = [
    {
      question: "What is Acctworld?",
      answer:
        "Acctworld is a premier platform dedicated to buying and selling established social media accounts. We provide a secure and efficient marketplace for individuals and businesses looking to enhance their online presence.",
    },
    {
      question: "Why should I buy a social media account from Acctworld?",
      answer:
        "Buying a social media account from Acctworld offers instant access to an established audience, saving you time and effort in building a following from scratch. Our accounts are verified and trusted, ensuring a seamless experience for buyers.",
    },
    {
      question: "What types of social media accounts are available on Acctworld?",
      answer:
        "We offer a wide range of social media accounts across various platforms, including Instagram, Twitter, Facebook, TikTok, YouTube, and more. Whether you're looking for accounts with large followings or niche-specific audiences, we have options to suit every need.",
    },
    {
      question: "Are the social media accounts on Acctworld authentic and genuine?",
      answer:
        "Yes, all accounts listed on Acctworld are thoroughly vetted to ensure authenticity and legitimacy. We take pride in offering verified accounts with real followers and engagement.",
    },
    {
      question: "How do I purchase a social media account from Acctworld?",
      answer:
        "To purchase a social media account, simply browse our marketplace, find the account that meets your criteria, and follow the instructions to complete the transaction securely. Our user-friendly platform makes the buying process quick and easy.",
    },
    {
      question: "Is it legal to buy and sell social media accounts?",
      answer:
        "While buying and selling social media accounts is generally permitted, it's essential to adhere to the terms of service of each platform. Acctworld operates within legal guidelines and encourages users to conduct transactions responsibly.",
    },
    {
      question: "Can I sell my social media account on Acctworld?",
      answer:
        "Yes, if you have a social media account that meets our criteria for listing, you can sell it on Acctworld. Simply create an account, list your account for sale, and our team will review it for approval.",
    },
    {
      question: "Are transactions on Acctworld secure?",
      answer:
        "Absolutely. We prioritize the security and privacy of our users and employ advanced encryption and security measures to safeguard transactions. You can buy and sell with confidence on our platform.",
    },
    {
      question: "What happens if there is an issue with my purchase?",
      answer:
        "In the rare event of an issue with your purchase, our dedicated support team is here to assist you. Simply reach out to us, and we'll work quickly to resolve any concerns or discrepancies.",
    },
    {
      question:
        "Can I request specific features or demographics for the social media account I want to purchase?",
      answer:
        "Yes, we understand that every buyer has unique preferences and requirements. You can specify your desired features, demographics, and niche preferences when searching for social media accounts on our platform, and we'll do our best to accommodate your needs.",
    },
  ];

  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
