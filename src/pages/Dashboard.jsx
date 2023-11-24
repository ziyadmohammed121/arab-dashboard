import React from "react";
import PlanCard from "../components/navbar/cards/PlanCard";
import PlanCardSecond from "../components/navbar/cards/PlanCardSecond";

const Dashboard = () => {
  const planDetails = [
    {
      name: "Basic",
      rate: 89.99,
      discount: 9.99,
      details: {
        user: "upto 25 users",
        storage: "Upto 25gb storage",
        support: "Email support",
      },
      bg: "bg-yellow-600/30",
    },
    {
      name: "Standard",
      rate: 189.99,
      discount: 99.99,
      details: {
        user: "upto 50 users",
        storage: "Upto 60gb storage",
        support: "Email+chat support",
      },
      bg: "bg-red-600/30",
    },
    {
      name: "Premium",
      rate: 389.99,
      discount: 199.99,
      details: {
        user: "upto 75 users",
        storage: "Upto 100gb storage",
        support: "Email+chat+whatsApp support",
      },
      bg: "bg-violet-500/60",
    },
  ];
  const planDetailSecond = [
    {
      name: "Free Starter",
      description:
        "The quickest and easiest way to try products with the basic functionalities",
      details: {
        user: "upto 8 users",
        storage: "Upto 3gb storage",
        support: "Email support",
      },
      bg: "bg-green-300",
      features:
        "Basic Documents, Task flow,Voting, Accounting, Banking, Notes, Investor, Director and team",
      btnText: "Get Started",
      title: "Free forever",
    },
    {
      name: "Enterprise Plan",
      description:
        "Effortless and customize and fine-tone services as your needs shift,ensure the prefect tools for success",
      details: {
        user: "upto 50 users",
        storage: "Upto 60gb storage",
        support: "Email+chat support",
      },
      bg: "bg-blue-300",
      btnText: "Get Contact",
      title: "Let's connect",
    },
  ];
  return (
    <div className="h-screen w-full overflow-y-auto">
      <div className="lg:w-[80%] w-[90%] my-[40px] mx-auto flex flex-col">
        <h2 className="text-[22px] font-bold mb-5">
          Choose a plan that's just right for you !
        </h2>
        <div className="flex justify-end my-3">
          {" "}
          <div className="border-[1px] border-black rounded-[12px] p-1 flex items-center w-fit">
            <button
              className={`rounded-[12px] flex items-center gap-3 text-center px-2 py-1 text-[12px] font-semibold w-fit bg-blue-300 text-black`}
            >
              Monthly
            </button>
            <button
              className={`rounded-[12px] flex items-center gap-3 text-center px-2 py-1 font-semibold text-[12px] w-fit text-black`}
            >
              Annually
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-24">
          {planDetails.map((item, id) => {
            return <PlanCard item={item} key={id} />;
          })}
        </div>
        <div className="grid grid-cols-2 w-full gap-14 py-10">
          {planDetailSecond.map((item, id) => {
            return <PlanCardSecond item={item} key={id} />;
          })}
        </div>
        <p className="text-blue-400 mt-4 text-right font-[12px]">
          *some unique features are provided as add-ons wih individual plans for
          each features
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
