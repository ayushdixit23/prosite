// import Lottie from 'lottie-react'
// import { useRouter } from 'next/navigation'
// import React, { useEffect, useState } from 'react'
// import { IoIosArrowRoundForward } from 'react-icons/io'
// import { RxCross1 } from 'react-icons/rx'
// import Flow from "../assets/Flow.json"

// const Membership = ({ setPop }) => {
// 	const [id, setId] = useState("")
// 	const [memberships, setMemberships] = useState()
// 	const router = useRouter()
// 	useEffect(() => {
// 		const data = sessionStorage.getItem("data");
// 		const parseData = JSON.parse(data);
// 		setId(parseData.id);
// 		setMemberships(parseData.memberships)
// 	}, []);

// 	return (
// 		<>
// 			<div className="flex md:w-[80%] bg-[#171717] md:h-[85%] sm:max-h-[650px] h-screen w-[95%] bg-bggg bg-cover  mt-5 overflow-y-scroll no-scrollbar rounded-2xl  pt-[30px] sm:overflow-hidden sm:px-[40px]">
// 				<div className="min-w-full p-[10px]">
// 					<div className="flex justify-between items-center">
// 						<p className="text-[#fff] text-[20px] leading-[40px] font-semibold">
// 							Your Subscription
// 						</p>
// 						<div className='text-white' onClick={() => { setPop(false) }}>

// 							<RxCross1 />
// 						</div>
// 					</div>
// 					<div className="mt-[20px] pn:max-sm:pb-[90px] sm:pb-[50px] grid sm:grid-cols-4 gap-[20px]">
// 						<div
// 							key="1"
// 							className="w-full bg-[#fff] hover:scale-105 duration-100 ring-1 ring-red-200 rounded-[10px] shadow-[0px 1px 2px #E1E3E5] p-1"
// 						>
// 							<div className="bg-[#f0f0f0] h-[150px] p-2 flex flex-col justify-center items-center rounded-[10px] w-full">
// 								<div>
// 									<div className="flex justify-between">
// 										<p className="text-[#070707] text-[19px] font-bold">Free</p>
// 									</div>
// 									<p className="text-[#333333] text-[14px] font-medium">
// 										For organizing every corner of your work & life.
// 									</p>
// 									<p className="text-[#333333] text-[30px]  font-bold">
// 										&#8377;0
// 									</p>
// 								</div>
// 							</div>
// 							<div className="mt-3 pl-1">
// 								<div className="flex flex-col gap-3">
// 									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
// 										{">"} Create Up-to 5 Products
// 									</p>
// 									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
// 										{">"} Create Up-to 2 Communities
// 									</p>
// 									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
// 										{">"} Badge : Not Available
// 									</p>
// 									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
// 										{">"} Access upto 5 templates
// 									</p>
// 								</div>
// 								{memberships === "Free" && (
// 									<div className="mt-[25px] -ml-1">
// 										<button
// 											disabled
// 											className="bg-[#99b5d0] w-full rounded-lg py-[14px] px-[25px] text-[#fff] text-[14px] font-semibold"
// 										>
// 											Current Plan
// 										</button>
// 									</div>
// 								)}
// 							</div>
// 						</div>
// 						<div
// 							key="2"
// 							className="w-full bg-[#fff] hover:scale-105 duration-100 rounded-[10px] shadow-[0px 1px 2px #E1E3E5] p-1"
// 						>
// 							<div className="bg-[#f0f0f0] h-[150px] p-2 flex flex-col justify-center items-center rounded-[10px] w-full">
// 								<div>
// 									<div className="flex justify-between">
// 										<p className="text-[#070707] text-[19px] font-bold">Plus</p>
// 										<div className="bg-[#F6F6F7] dark:bg-[#006EF5] rounded-[20px] flex justify-center align-center px-[12px]">
// 											<p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
// 												Starter
// 											</p>
// 										</div>
// 									</div>
// 									<p className="text-[#333333] text-[14px] font-medium">
// 										For organizing every corner of your work & life.
// 									</p>
// 									<p className="text-[#333333] text-[30px]  font-bold">
// 										&#8377;499{" "}
// 										<span className="text-[#333333] text-[12px] font-medium">
// 											.Excluding gst
// 										</span>
// 									</p>
// 								</div>
// 							</div>
// 							<div className="mt-3 pl-1">
// 								<div className="flex flex-col gap-3">
// 									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
// 										{">"} Create Up-to 5 Products
// 									</p>
// 									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
// 										{">"} Create Up-to 3 Communities
// 									</p>
// 									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
// 										{">"} Badge: Available
// 									</p>
// 									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
// 										{">"} Access upto 10 templates
// 									</p>
// 								</div>
// 								<div className="mt-[25px] -ml-1">
// 									<button onClick={() => router.push("/membership")} className="bg-[#006EF5] rounded-lg py-[15px] px-[25px] w-full text-[#fff] text-[14px] leading-[17px] font-semibold">
// 										Upgrade +
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 						<div
// 							key="3"
// 							className="w-full bg-[#fff] ring-2 ring-yellow-400 hover:scale-105 duration-100 scale-100 rounded-[10px] shadow-[0px 1px 2px #E1E3E5] p-1"
// 						>
// 							<div className="bg-[#f0f0f0] h-[150px] p-2 flex flex-col justify-center items-center rounded-[10px] w-full">
// 								<div>
// 									<div className="flex justify-between">
// 										<p className="text-[#070707] text-[19px] font-bold">Pro</p>
// 										<div className="sm:h-[20px] h-[20px] pp:w-[230px] w-[150px] relative flex justify-end  items-center">
// 											<Lottie
// 												animationData={Flow}
// 												className="sm:h-[30px] h-[30px] pp:w-[90px] w-[80px] relative flex justify-center items-center"
// 												loop={true}
// 											/>

// 											<div className="px-2 flex justify-center items-center font-medium absolute text-black rounded-xl ">
// 												<div className=" rounded-[20px] flex justify-center align-center ">
// 													<p className="text-[#00153B] text-[12px] font-bold">
// 														most popular
// 													</p>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 									<p className="text-[#333333] text-[14px] font-medium">
// 										For organizing every corner of your work & life.
// 									</p>
// 									<p className="text-[#333333] text-[30px]  font-bold">
// 										&#8377;1999{" "}
// 										<span className="text-[#333333] text-[12px] font-medium">
// 											.Excluding gst
// 										</span>
// 									</p>
// 								</div>
// 							</div>
// 							<div className="mt-3 pl-1">
// 								<div className="flex flex-col gap-3">
// 									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
// 										{">"} Create Up-to 10 Products
// 									</p>
// 									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
// 										{">"} Create Up-to 5 Communities
// 									</p>
// 									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
// 										{">"} Badge : Available
// 									</p>
// 									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
// 										{">"} Access upto 15 templates
// 									</p>
// 								</div>
// 								<div className="mt-[25px] -ml-1">
// 									<button onClick={() => router.push("/membership")} className="bg-yellow-400 rounded-lg py-[15px] px-[25px] w-full text-[#fff] text-[14px] leading-[17px] font-semibold">
// 										Upgrade +
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 						<div
// 							key="4"
// 							className="w-full bg-[#fff] hover:scale-105 duration-100 rounded-[10px] shadow-[0px 1px 2px #E1E3E5] p-1"
// 						>
// 							<div className="bg-[#f0f0f0] h-[150px] p-2 flex flex-col justify-center items-center rounded-[10px] w-full">
// 								<div>
// 									<div className="flex justify-between">
// 										<p className="text-[#070707] text-[19px] font-bold">Free</p>
// 										<div className="bg-[#F6F6F7] dark:bg-[#006EF5] rounded-[20px] flex justify-center align-center px-[12px]">
// 											<p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
// 												Starter
// 											</p>
// 										</div>
// 									</div>
// 									<p className="text-[#333333] text-[14px] font-medium">
// 										For organizing every corner of your work & life.
// 									</p>
// 									<p className="text-[#333333] text-[30px]  font-bold">
// 										&#8377;3499{" "}
// 										<span className="text-[#333333] text-[12px] font-medium">
// 											.Excluding gst
// 										</span>
// 									</p>
// 								</div>
// 							</div>
// 							<div className="mt-3 pl-1">
// 								<div className="flex flex-col gap-3">
// 									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
// 										{">"} Create Up-to 10 Products
// 									</p>
// 									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
// 										{">"} Create Up-to 10 Communities
// 									</p>
// 									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
// 										{">"} Badge: Available
// 									</p>
// 									<p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
// 										{">"} Access upto 30 templates
// 									</p>
// 								</div>
// 								<div className="mt-[25px] -ml-1">
// 									<button onClick={() => router.push("/membership")} className="bg-[#006EF5] rounded-lg py-[15px] px-[25px] w-full text-[#fff] text-[14px] leading-[17px] font-semibold">
// 										Upgrade +
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="flex justify-center items-center">
// 						<button
// 							onClick={() => router.push("/membership")}
// 							className="bg-[#006EF5] sm:-mt-9 flex justify-center items-center gap-1 rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold"
// 						>
// 							Learn More
// 							<IoIosArrowRoundForward className='text-lg font-semibold text-white' />
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	)
// }

// export default Membership
"use client";
import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoMdCheckmarkCircle } from "react-icons/io";

const NewMembershipPopup = ({ setPop }) => {
  const [id, setId] = useState("");
  const [memberships, setMemberships] = useState();
  const workspaceMembershipRedirectionUrl = `https://workspace.grovyo.com/aybdhw?zyxxpht=${id}&path=/membership`;
  useEffect(() => {
    const data = sessionStorage.getItem("data");
    const parseData = JSON.parse(data);
    setId(parseData.id);
    setMemberships(parseData.memberships);
  }, []);

  return (
    <div className="flex lg:w-[80%] sm:pt-[14px] sm:w-[95%] w-full bg-loginbg dark:bg-[#273142] bg-[#fefefe] h-full md:max-h-[92%] bg-cover z-20 sm:mt-5 sm:rounded-2xl  sm:px-[40px]">
      <div className="min-w-full overflow-y-scroll no-scrollbar p-[10px]">
        <div className="flex justify-between items-center">
          <p className="dark:text-[#fff] text-black text-[20px] leading-[40px] font-semibold">
            Subscription Plans
          </p>
          <div
            onClick={() => {
              setPop(false);
            }}
            className="dark:text-white"
          >
            <RxCross1 />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-1 font-medium justify-center items-center">
            <div>Choose a plan that best suits your business.</div>
            <div>
              Start 1-month free trial: no obligation, no activation fee.
            </div>
          </div>
          <div className="mt-[20px]">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5 w-full">
              {/* free */}
              <div className="dark:bg-[#212A35] rounded-2xl light:shadow-sm bg-white flex w-full flex-col gap-5 p-6">
                <div className="font-semibold text-lg">Free</div>
                <div className="flex flex-col gap-1">
                  <div className="text-3xl font-semibold">
                    ₹0 / <span className="text-base">forever</span>
                  </div>
                  <div className="text-xs  text-[#838696]">Forever</div>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href={workspaceMembershipRedirectionUrl}
                    target="_blank"
                    className="p-2 px-4 focus:border-2 border flex justify-center items-center font-medium text-sm w-full rounded-lg border-black/80 dark:border-white"
                  >
                    Active
                  </a>
                </div>
                <div className="border border-dashed my-2 border-black/80 dark:border-white"></div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Product Listing (5 products)
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">Basic analytics</div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Create Communities 2
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Limited prosite tools
                    </div>
                  </div>
                </div>
              </div>

              {/* plus */}
              <div className="dark:bg-[#1E2840] bg-white border-4 light:shadow-sm border-[#FCCF49] relative rounded-2xl overflow-hidden flex w-full flex-col gap-5 p-6">
                <div class="absolute z-20 left-1/2 text-black  font-medium bg-[#FCCF49] p-1 px-10 rounded-b-full -top-1 transform text-xs -translate-x-1/2">
                  <div className="flex justify-end font-medium items-end">
                    Recommended
                  </div>
                </div>

                <div className="font-semibold text-lg">Plus</div>
                <div className="flex flex-col gap-1">
                  <div className="text-3xl font-semibold">
                    ₹499 /<span className="text-base">month</span>
                  </div>
                  <div className="text-xs  text-[#838696]">Billed monthly</div>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href={workspaceMembershipRedirectionUrl}
                    target="_blank"
                    className="p-2 px-4 focus:border-2 flex justify-center items-center border text-sm w-full rounded-lg font-medium border-black/80 dark:border-white"
                  >
                    Getting Started
                  </a>
                </div>
                <div className="border border-dashed my-2 border-black/80 dark:border-white"></div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Verification Badge
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Product Listing (5 products)
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Advanced Analytics
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">20% platform Fees</div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Create Communities 3
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Basis tools for prosite
                    </div>
                  </div>
                </div>
              </div>

              {/* pro */}
              <div className="dark:bg-[#212A35] rounded-2xl light:shadow-sm bg-white flex w-full flex-col gap-5 p-6">
                <div className="font-semibold text-lg">Pro</div>
                <div className="flex flex-col gap-1">
                  <div className="text-3xl font-semibold">
                    ₹1999 /<span className="text-base">month</span>
                  </div>
                  <div className="text-xs  text-[#838696]">Billed monthly</div>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href={workspaceMembershipRedirectionUrl}
                    target="_blank"
                    className="p-2 px-4 focus:border-2 border flex justify-center items-center text-sm w-full rounded-lg font-medium border-black/80 dark:border-white"
                  >
                    Getting Started
                  </a>
                </div>
                <div className="border border-dashed my-2 border-black/80 dark:border-white"></div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Verification Badge
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Product Listing 20 products
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Advanced analytics
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">3% platform Fees</div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Create Communities 5
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Advanced tools for prosite{" "}
                    </div>
                  </div>
                </div>
              </div>

              {/* premium */}
              <div className="dark:bg-[#1E2840] light:shadow-md bg-white rounded-2xl flex w-full flex-col gap-5 p-6">
                <div className="font-semibold text-lg">Premium</div>
                <div className="flex flex-col gap-1">
                  <div className="text-3xl font-semibold">
                    ₹3499 /<span className="text-base">month</span>
                  </div>
                  <div className="text-xs  text-[#838696]">Billed monthly</div>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href={workspaceMembershipRedirectionUrl}
                    target="_blank"
                    className="p-2 px-4 focus:border-2 flex justify-center items-center border text-sm w-full rounded-lg font-medium border-black/80 dark:border-white"
                  >
                    Getting Started
                  </a>
                </div>
                <div className="border border-dashed my-2 border-black/80 dark:border-white"></div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Verification Badge
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Product Listing 50 products
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Advanced analytics
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">1% platform Fees</div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Create Communities 10
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <IoMdCheckmarkCircle />
                    </div>
                    <div className="text-sm font-medium">
                      Advanced tools for prosite{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href={workspaceMembershipRedirectionUrl}
            target="_blank"
            className="flex justify-center items-center underline text-sm mt-[18px] mb-[10px]"
          >
            Compare all features
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewMembershipPopup;
