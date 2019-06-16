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
      question: "តើតម្លៃកង់អគ្គីសនីនៅឆ្នាំ២០១៩មានតម្លៃប៉ុន្មាន?",
      answer: `តម្លៃធម្មតាគឺ 899 ដុល្លារជាមួយនឹងការរចនាគុណភាពស្តង់ដារបស់បារាំង។
      កង់អគ្គិសនីដែលមានថ្មលីចូមជំនាន់ចុងក្រោយនិងឆ្នាំងសាកថ្ម CE (Conform Europe Standard 48V12Ah)`
    },
    {
      question: `តើកង់អគ្គីសនីមានការធានារបស់ក្រុមហ៊ុនផលិតដែរឬទេ?`,
      answer: `កង់អគ្គីសនីទាំងមូលមានការធានារយៈពេល​ ១ ឆ្នាំពីការបញ្ជារទិញ,ដោយមិនរាប់បញ្ចូលផ្នែកខូចខាតដោយអ្នកប្រើប្រាស់និងការថែទាំ។`
    },
    {
      question: "តើត្រូវរកទិញគ្រឿងបន្លាស់នៅឯណាក្នុងករណីដែលមានបញ្ហា?",
      answer: `ផ្នែកគ្រឿងបន្លាស់តូចៗជាទូទៅអាចរកបានពីអ្នកលក់គ្រឿងបន្លាស់ធម្មតា ឬអាចរកទិញបាន ពីក្រុមហ៊ុន VOLTRA
      ដោយផ្ទាល់។ សម្រាប់គ្រឿងអេឡិចត្រូនិក VOLTRA
      គឺមានរួមបញ្ចូលនូវគុណភាពផ្នែកលក់ដែលប្រកបដោយគុណភាពនិងមានស្តុកទុកយ៉ាងធំ។`
    },
    {
      question: `តើអ្វីជាអត្ថប្រយោជន៍នៃការចំណាយក្នុងការបញ្ជាទិញជាមុន?`,
      answer: `អតិថិជនដែលបង់ប្រាក់ជាមុនមានការបញ្ចុះតម្លៃ ១០០ ដុល្លារ។ តំលៃសរុបនៃ កង់អគ្គិសនី១ក្នុងការបញ្ជាទិញជាមុនគឺ:
      ៧៩៩ $ ។ លើសពីនេះទៅទៀតក្រុមហ៊ុន VOLTRA
      ផ្តល់ជូននូវមួកសុវត្ថិភាពដល់អតិថិជនរបស់ខ្លួនសម្រាប់ការទិញកង់ e-bike មួយ។`
    },
    {
      question: `តើអតិថិជនអាចទូទាត់តាមការបញ្ជាទិញជាមុនដោយរបៀបណា?`,
      answer: `អតិថិជនបង់ប្រាក់កក់ 70% ជាសាច់ប្រាក់ រឺដោយ PI PAY រឺផ្ទេរប្រាក់តាមធនាគារដែលមានគណនីរបស់ក្រុមហ៊ុន
      VOLTRA ។ កិច្ចសន្យាដាក់ប្រាក់កក់ត្រូវបានបង្កើតឡើងរវាងក្រុមហ៊ុន VOLTRA និងអ្នកទិញ។
      សមតុល្យនឹងត្រូវបានទូទាត់នៅពេលកង់អគ្គិសនីបានមកដល់។`
    },
    {
      question: `តើអតិថិជនត្រូវរង់ចាំរយៈពេលប៉ុន្មានដើម្បីទទួលបានកង់អគ្គិសនីរបស់ពួកគេ?`,
      answer: `អតិថិជនអាចរង់ចាំរយៈពេល ៤០ថ្ងៃ បន្ទាប់ពីធ្វើការប្រគល់ប្រាក់បញ្ញើនិងចុះកិច្ចសន្យា។`
    },
    {
      question: `តើត្រូវធ្វើដូចម្តេចទើបអតិថិជនអាចទទួលបាន កង់អគ្គិសនីរបស់ពួកគេ?`,
      answer: `អតិថិជនអាចទទួលបានកង់អគ្គិសនីរបស់គាត់ដោយមកកាន់ក្រុមហ៊ុន VOLTRA
      ដែលមានទីតាំងស្ថិតនៅតាមបណ្តោយផ្លូវ 111 ផ្ទះលេខ 35A/B ក្នុងរាជធានីភ្នំពេញ។
      សម្រាប់អតិថិជននៅតាមបណ្តាខេត្តផ្សេងទៀតនៅក្នុងប្រទេសកម្ពុជា VOLTRA
      នឹងបញ្ជូនកង់អគ្គិសនីទៅក្រុមហ៊ុនដឹកជញ្ជូន (ថ្លៃដឹកជញ្ជូនគឺអតិថិជនជាអ្នកចេញ) ។`
    },
    {
      question: `តើអ្វីខ្លះដែលជាអត្ថប្រយោជន៍សម្រាប់អតិថិជនក្នុងការទិញកង់អគ្គិសនីជាមុន?`,
      answer: `ក្រុមហ៊ុន VOLTRA
      បានផ្តល់ជូននូវមធ្យោបាយធ្វើដំណើរមួយដ៏សមរម្យដែលមានការចំណាយតិចហើយ\nការដឹកជញ្ជូននឹងលែងជាបញ្ហាចំ
      ណាយចំបងសម្រាប់អ្នកប្រើប្រាស់: \n 
      
      <br/><br/> - ចំងាយក្នុង ១ គីឡូម៉ែត្រគឺត្រឹមតែ ១៥ រៀល
      <br/> - សម្រាប់ការបើកបរប្រចាំថ្ងៃ ២០ គីឡូម៉ែត្រ,ការចំណាយប្រចាំខែសម្រាប់អគ្គិសនីគឺត្រឹមតែ ៩០០០ រៀល
      (2,25 ដុល្លារ) តែប៉ុណ្ណោះ។
      
      <br/> <br/> ការចំណាយទៅលើការទិញ កង់អគ្គិសនីគឺមានតំលៃថោកជាងការទិញម៉ូតូដែលប្រើប្រេងសាំង\nដល់ទៅ ពីរដង
      ហើយតម្លៃអគ្គិសនីគឺមានតំលៃថោកជាងការប្រើប្រាស់ម៉ូតូធម្មតារហូតដល់ ៦ ដងក្នុងមួយថ្ងៃ។
      លើសពីនេះទៅទៀតនោះគឺការបើកបរស្អាតជាមួយ VOLTRA
      គឺជាការជួយដល់បរិយាយកាសខាងក្រៅ,ជួយកាត់បន្ថយការបំពុលបរិស្ថានៈ គ្មានផ្សែងពុល គ្មានកំដៅ និងគ្មាន
      សម្លេងរំខាន។`
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
            <h1 className="warranty">FAQ</h1>
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
