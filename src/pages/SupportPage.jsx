import React from "react";
import {nanoid} from "nanoid"

import FaqSection from "../components/FaqSection"
import KlothlinkSupport from "../components/KlothlinkSupport"
import Policy from "../components/Policy";

export default function Support(){

    const policyData = [
        {
            id: nanoid(),
            head: "RETURN POLICY",
            subHead: "EASY RETURN AT KLOTHLINK",
            descr: "Explore our hassle-free return policy designed to ensure your satisfaction with every purchase.",
            linkTitle: "Read Return Policy",
            link: "#returnlink",
            cardComponents: [
                {
                    id: nanoid(),
                    head: "Eligibility",
                    descr: "Items must be unused, with tags attached, and returned within 30 days of delivery."
                },
                {
                    id: nanoid(),
                    head: "Process",
                    descr: "Initiate returns through our Return Center for a smooth and efficient process.",
                },
                {
                    id: nanoid(),
                    head: "Refund",
                    descr: "Expect a refund to your original payment method within 7-10 business days."
                }
            ]
        },
        {
            id: nanoid(),
            head: "CANCELATION POLICY",
            subHead: "FLEXIBLE ORDERING EXPERIENCE",
            descr: "Familiarize yourself with our cancellation policy to make changes to your order with ease.",
            linkTitle: "Read Cancelation Policy",
            link: "#cancelationlink",
            cardComponents: [
                {
                    id: nanoid(),
                    head: "Cancelation Window",
                    descr: "Orders can be canceled within 24 hours of placement for a full refund."
                },
                {
                    id: nanoid(),
                    head: "Cancelation Process",
                    descr: "Visit our Order Management section to cancel your order effortlessly.",
                },
                {
                    id: nanoid(),
                    head: "Refund Timeline",
                    descr: "Refunds for canceled orders are processed within 5-7 business days."
                }
            ]
        }
    ]

    return(
        <main>
            <KlothlinkSupport />
            {
                policyData.map(item => {
                    return(
                        <Policy key={item.id} head={item.head} subHead={item.subHead} descr={item.descr} linkTitle={item.linkTitle} link={item.link} cardComponents={item.cardComponents} />
                    )
                })
            }
            <FaqSection />
        </main>
    )
}