import React, { Component } from "react";
import Navbar from "../components/layouts/navbar";

import parse from "html-react-parser";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

class FAQ extends Component {
  question_and_answer_kh = [
    {
      question: "តើកង់អាគុយសេរីឆ្នាំ 2019 មួយគ្រឿងមានតម្លៃប៉ុន្មាន?",
      answer: `ជាទូទៅតម្លៃគឺ 899$ ចំពោះកង់អាគុយគុណភាពពីប្រទេសបារាំង។ កង់អាគុយ e-bike ប្រើអាគុយបច្ចេកវិទ្យាចុងក្រោយប្រភេទ lithium និងឆ្នាំងសាកបទដ្ឋាន CE (ស្តង់ដារអ៊ឺរ៉ុប 48V12Ah)`
    },
    {
      question: `តើកង់អាគុយមានការធានាពីក្រុមហ៊ុនផលិតដែរឬទេ?`,
      answer: `ផលិផលកង់អាគុយទាំងអស់ សុទ្ធតែមានការធានារយៈពេល 1 ឆ្នាំ ដោយមិនរាប់បញ្ចូលការបែកបាក់ដែលបណ្តាលមកពីអ្នកប្រើប្រាស់ និងតំហែទាំផ្សេងៗ។`
    },
    {
      question: "តើត្រូវរកទិញគ្រឿងបន្លាស់នៅឯណាក្នុងករណីដែលមានបញ្ហា?",
      answer: `គ្រឿងបំលាស់មេកានិចទូទៅគឺមានសម្រាប់ប្តូរ តាមរយៈអ្នកចែកចាយគ្រឿងបំលាស់ និងមានផ្ទាល់ពី VOLTRA។ ចំពោះគ្រឿងអេឡិកត្រូនិច VOLTRA មានស្តុកច្រើនចំពោះគ្រឿងបំលាស់ដែលមានគុណភាពខ្ពស់។`
    },
    {
      question: `តើអ្នកទទួលផលអ្វីពីការកក់ទិញកង់អាគុយដំបូងមុន?`,
      answer: `អតិថិជនដែលកក់ទិញ នឹងទទួលបាននូវការបញ្ចុះតម្លៃ 100$។ ចំពោះតម្លៃសរុបគឺត្រឹមតែ 799$ តែប៉ុណ្ណោះ។ ហើយក្រុមហ៊ុន VOLTRA ក៏មានថែមជូននូវមួកសុវត្ថភាពមួយដល់អតិថិជនដោយឥតគិតថ្លៃផងដែរ។`
    },
    {
      question: `តើអ្នកអាចកក់ទិញដោយរបៀបណា?`,
      answer: `អ្នកអាចកក់ជាប្រាក់សុទ្ធ 70% ឬផ្ទេរតាម PIPAY ឬអាចផ្ទេរប្រាក់មកគណនីធនាគាររបស់ VOLTRA ដោយផ្ទាល់បាន។ កុងត្រានៃការកក់នឹងមានជូនរវាងក្រុមហ៊ុន VOLTRA និងអតិថិជន។ ចំពោះប្រាក់ដែលនៅសល់ គឺនឹងត្រូវបង់បង្គ្រប់នៅពេលដែលអតិថិជនទទួលបានកង់អាគុយ។`
    },
    {
      question: `តើអ្នកនឹងទទួលបានកង់អាគុយនៅពេលណា?`,
      answer: `អតិថិជនត្រូវរងចាំរយៈពេល 40 ថ្ងៃបន្ទាប់ពីចុះកុងត្រា និងបង់ប្រាក់កក់រួច។`
    },
    {
      question: `តើអតិថិជននឹងទទួលបានកង់អាគុយដោយរបៀបណា?`,
      answer: `អតិថិជននឹងទទួលកង់អាគុយដោយទៅក្រុមហ៊ុន VOLTRA ផ្ទាល់ ដែលមានអាសយដ្ឋានផ្ទះលេខ #35A/B, ផ្លូវ 111, ភ្នំពេញ។ ចំពោះអតិថិជនដែលនៅតាមបណ្តាខេត្ត ក្រុមហ៊ុននឹងដឹកជូនតាមរយៈក្រុមហ៊ុនដឹកជញ្ជូន (អតិថិជនត្រូវចេញថ្លៃដឹកជញ្ជូនដោយខ្លួនឯង)`
    },
    {
      question: `តើអ្វីខ្លះដែលជាអត្ថប្រយោជន៍សម្រាប់អតិថិជនក្នុងការទិញកង់អគ្គិសនីជាមុន?`,
      answer: `ក្រុមហ៊ុន VOLTRA ផ្តល់នូវផលិតផលដែលមានតម្លៃថោកសមរម្យជូនដល់អតិថិជនដូចជា៖ \n 
      
      <br/><br/> - ក្នុងការធ្វើដំណើរ 1km លោកអ្នកចំណាយត្រឹមតែ 15 ៛ ប៉ុណ្ណោះ!
      <br/> - ចំពោះការធ្វើដំណើរ 20km ជារៀងរាល់ថ្ងៃ លោកអ្នកចំណាយលើការសាកអគ្គិសនីត្រឹមតែ 9,000 ៛ (2.25 $) តែប៉ុណ្ណោះក្នុងមួយខែ។
      
      <br/> <br/> តម្លៃនៃការទិញកង់អាគុយ e-bike គឺថោកជាការទិញម៉ូតូ ហើយចំពោះការចំណាយទៅលើអគ្គិសនីគឹថោកជាការចំណាយលើថ្លៃសាំងម៉ូតូទៅទៀត។
      លើសពីនេះទៅទៀត ការធ្វើដំណើរដោយកង់អាគុយ គឺនាំទៅរកបរិស្ថាស្អាតដោយកាត់បន្ថយការបំពុលផ្សេងៗដូចជា គ្មានផ្សែង គ្មានការកើនកម្តៅ គ្មានការបំពុលដោយសម្លេង ឬដោយប្រេងឥន្ទននានា។`
    }
  ];

  question_and_answer_en = [
    {
      question: `How much does an electric bike 2019 edition cost?`,
      answer: `The normal price is 899$ with French Quality Design. The e-bike includes a lithium battery last generation and a battery charger CE norm (Conform Europe Standard 48V12Ah)`
    },
    {
      question: `Does the electric bike have a manufacturer warranty?`,
      answer: `The whole electric bike has a warranty of 1 year from its purchase, excluded broken parts by users and maintenance.`
    },
    {
      question: `How to replace a spare part in case of problems?`,
      answer: `The common mechanical parts are available from the spare parts dealers or available directly from VOLTRA. For electronic parts, VOLTRA integrates a quality after-sales department with a large stock.`
    },
    {
      question: `What is the benefit of paying in preorder?`,
      answer: `Customers who pay in preorder have a discount of 100$. The total cost of the e-bike in preorder: 799$. In addition, the VOLTRA Company offers a helmet to its customers for the purchase of one e-bike.`
    },
    {
      question: `How customers pay their electric bike in preorder?`,
      answer: `Customers pay 70% of deposit in cash or by PI PAY or by money transfer on VOLTRA bank account. A deposit contract is established between the VOLTRA Company and the Buyer. The balance will be paid on the delivery.`
    },
    {
      question: `How long customers wait to receive their vehicle?`,
      answer: `Customers wait 40 working days after giving the deposit and signed the contract.`
    },
    {
      question: `How customers get their e-bike?`,
      answer: `Customers get their product by going directly to the VOLTRA store located at number 35A/B, street 111 in Phnom Penh. For customers who order from another city in Cambodia, VOLTRA will send them by a transport company (the transport costs must be paid by the customer).`
    },
    {
      question: `What is the benefit for customers of buying an e-bike?`,
      answer: `
      VOLTRA Company offers a cheap way of transportation will no longer be a significant cost to users: 
      <br/><br/>- 1km traveled equals 15 riels.
      <br/>- For daily driving 20km traveled, the monthly cost for electricity is only 9,000 riels ($ 2.25). 
      <br/><br/>The cost to buy an e-bike is twice cheaper than buying a motorbike and the price of electricity is 6 times cheaper to use daily than gas motorbike.
      In addition, clean driving acts directly on our climate by reducing pollution: no smoke, no heat, no noise, no gas, or oil.

      `
    }
  ];

  constructor() {
    super();
    this.state = {
      showConent: true
    };
  }

  fn_toggle = () => {
    this.setState({ showConent: !this.state.showConent });
  };

  fn_question_and_answer = (question, answer) => {
    return (
      <React.Fragment>
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>{question}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>{answer}</p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </React.Fragment>
    );
  };

  render() {
    const { showConent } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <div className="ui text container">
          <center>
            <h1 className="warranty">សំណួរ</h1>
            <br />
          </center>
          <Accordion>
            {this.question_and_answer_kh.map((data, key) => {
              return (
                <AccordionItem key={key}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{data.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{parse(data.answer)}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        <div className="ui text container">
          <center>
            <br />
            <h1 className="warranty">FAQ</h1>
            <br />
          </center>
          <Accordion>
            {this.question_and_answer_en.map((data, key) => {
              return (
                <AccordionItem key={key}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{data.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{parse(data.answer)}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </React.Fragment>
    );
  }
}

export default FAQ;
