import React from "react";
import QuizData from './QuizData';

const Contact = () => {

  
  return (
    <>
         

    <div className="container text-center">
      <div className="row">
        <div className="col-sm-12 text-center pt-4">
        <QuizData />
          <h1>
           
            <b> Wel Come To Quiz page!</b>
          </h1>
          <hr />
        </div>
        <div className="col-sm-8 offset-sm-2">
          <div className="wraper">
            <div className="quizDiv"><b><span>1.</span></b></div><br />
            <div className="options">
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;

