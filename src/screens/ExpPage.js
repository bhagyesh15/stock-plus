import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';


const URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/';

function ExpPage(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="bg-light">
            <div className="container bg-white">
                <Line 
                    data={{
                        labels:[1,2,3,4,5,6],
                        datasets:[{
                            data:[1,2,5,6,8,20]
                        }]
                    }}
                />
                <div style={{backgroundColor:`#fdfdfd`}}>

        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <svg id="b956ec1c-bd7a-448a-8f35-9e7289c73b78" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="826.06346" height="300" viewBox="0 0 826.06346 335.01004"><path d="M266.56473,572.513l-1.30115-1.51825c11.00915-9.43521,24.7108-21.17709,29.83928-36.69659,5.0555-15.29892,1.25254-33.7688-9.92482-48.20211-9.51229-12.28383-24.20053-21.95671-42.47664-27.97352-3.60489-1.18686-7.34772-2.241-10.96747-3.26081-8.74923-2.46423-17.79646-5.01294-25.80868-9.67057-11.03532-6.41528-21.05875-19.01629-18.57493-32.706a23.85568,23.85568,0,0,1,17.15589-18.50774l.532,1.92821a21.8606,21.8606,0,0,0-15.72264,16.95071c-2.30809,12.72161,7.18337,24.54137,17.61492,30.606,7.7931,4.53013,16.71634,7.04369,25.34567,9.47438,3.64019,1.02537,7.40461,2.08584,11.0509,3.28624,18.65633,6.142,33.675,16.04819,43.43219,28.64827,11.57926,14.95243,15.50414,34.13231,10.24266,50.0547C291.69857,550.97374,277.76271,562.91709,266.56473,572.513Z" transform="translate(-186.96827 -282.49498)" fill="#f1f1f1"/><ellipse cx="217.32716" cy="393.29557" rx="17.5" ry="8.5" transform="translate(-265.12435 -227.72882) rotate(-12.19172)" fill="#f1f1f1"/><ellipse cx="242.83769" cy="445.076" rx="17.5" ry="8.5" transform="translate(-275.48417 -221.17357) rotate(-12.19172)" fill="#f1f1f1"/><ellipse cx="213.46006" cy="460.63089" rx="17.5" ry="8.5" transform="translate(-279.43168 -227.02683) rotate(-12.19172)" fill="#f1f1f1"/><rect x="272.22557" y="178.20395" width="2" height="6" fill="#e5e5e5"/><path d="M461.19384,594.53878h-2V581.7546h2Zm0-25.56787h-2V556.18673h2Zm0-25.56836h-2V530.61886h2Zm0-25.56787h-2V505.0505h2Zm0-25.56787h-2V479.48263h2Z" transform="translate(-186.96827 -282.49498)" fill="#e5e5e5"/><rect x="272.22557" y="324.82798" width="2" height="6" fill="#e5e5e5"/><rect x="491.22557" y="178.20395" width="2" height="6" fill="#e5e5e5"/><path d="M680.19384,594.53878h-2V581.7546h2Zm0-25.56787h-2V556.18673h2Zm0-25.56836h-2V530.61886h2Zm0-25.56787h-2V505.0505h2Zm0-25.56787h-2V479.48263h2Z" transform="translate(-186.96827 -282.49498)" fill="#e5e5e5"/><rect x="491.22557" y="324.82798" width="2" height="6" fill="#e5e5e5"/><rect x="601.69529" y="60.82798" width="2" height="6" fill="#e5e5e5"/><path d="M790.66356,595.03732h-2V582.75167h2Zm0-24.57129h-2V558.17989h2Zm0-24.57178h-2V533.6086h2Zm0-24.57129h-2V509.03732h2Zm0-24.57129h-2V484.46554h2Zm0-24.57178h-2V459.89425h2Zm0-24.57129h-2V435.323h2Zm0-24.57128h-2V410.75167h2Zm0-24.57178h-2V386.17989h2Zm0-24.57129h-2V361.6086h2Z" transform="translate(-186.96827 -282.49498)" fill="#e5e5e5"/><rect x="601.69529" y="324.82798" width="2" height="6" fill="#e5e5e5"/><rect x="711.06346" y="12.82798" width="2" height="6" fill="#e5e5e5"/><path d="M900.03173,595.08321h-2V582.843h2Zm0-24.48h-2V558.363h2Zm0-24.48h-2V533.883h2Zm0-24.48h-2V509.403h2Zm0-24.48h-2V484.92306h2Zm0-24.48h-2V460.44308h2Zm0-24.48h-2V435.9631h2Zm0-24.48h-2V411.48312h2Zm0-24.48h-2V387.00314h2Zm0-24.48h-2V362.52316h2Zm0-24.48h-2V338.04317h2Zm0-24.48h-2V313.56319h2Z" transform="translate(-186.96827 -282.49498)" fill="#e5e5e5"/><rect x="711.06346" y="324.82798" width="2" height="6" fill="#e5e5e5"/><rect x="382.22557" y="97.82798" width="2" height="6" fill="#e5e5e5"/><path d="M571.19384,595.69161h-2V584.06026h2Zm0-23.26318h-2V560.79708h2Zm0-23.26318h-2V537.5339h2Zm0-23.26319h-2V514.27071h2Zm0-23.26318h-2V491.00753h2Zm0-23.26319h-2V467.74435h2Zm0-23.26318h-2V444.48116h2Zm0-23.26318h-2V421.218h2Zm0-23.26319h-2V397.9548h2Z" transform="translate(-186.96827 -282.49498)" fill="#e5e5e5"/><rect x="382.22557" y="324.82798" width="2" height="6" fill="#e5e5e5"/><path d="M1010.95959,616.10888H348.83879a2.07224,2.07224,0,0,1-2.07214-2.07214V296.68223a2.07214,2.07214,0,0,1,4.14427,0V611.96461h660.04867a2.07214,2.07214,0,1,1,0,4.14427Z" transform="translate(-186.96827 -282.49498)" fill="#3f3d56"/><polygon points="493.134 180.989 383.049 98.534 274.468 179.862 271.983 176.545 383.049 93.355 492.61 175.418 601.484 56.274 601.921 56.097 711.744 11.848 713.293 15.693 603.907 59.765 493.134 180.989" fill="#3f3d56"/><circle cx="273.22566" cy="178.2037" r="12.43282" fill="#28a745"/><circle cx="383.04887" cy="97.39039" r="12.43282" fill="#28a745"/><circle cx="492.87208" cy="178.2037" r="12.43282" fill="#e5e5e5"/><circle cx="489.87208" cy="222.2037" r="12.43282" fill="#28a745"/><circle cx="602.69529" cy="58.01981" r="12.43282" fill="#28a745"/><circle cx="712.51849" cy="12.43282" r="12.43282" fill="#28a745"/><ellipse cx="339.07659" cy="523.38032" rx="21.53369" ry="6.76007" transform="translate(-457.83786 370.75274) rotate(-69.08217)" fill="#2f2e41"/><circle cx="112.30113" cy="273.40747" r="43.06735" fill="#2f2e41"/><rect x="92.67552" y="307.20707" width="13.08374" height="23.44171" fill="#2f2e41"/><rect x="118.84299" y="307.20707" width="13.08374" height="23.44171" fill="#2f2e41"/><ellipse cx="103.57867" cy="330.92135" rx="10.90314" ry="4.08868" fill="#2f2e41"/><ellipse cx="129.74615" cy="330.3762" rx="10.90314" ry="4.08868" fill="#2f2e41"/><circle cx="113.39147" cy="262.50425" r="14.71921" fill="#fff"/><circle cx="113.39146" cy="262.50425" r="4.90643" fill="#3f3d56"/><path d="M257.49267,515.85093c-3.47748-15.57379,7.63867-31.31042,24.82861-35.1488s33.94422,5.67511,37.4217,21.24884-7.91492,21.31763-25.10486,25.156S260.97015,531.42479,257.49267,515.85093Z" transform="translate(-186.96827 -282.49498)" fill="#e6e6e6"/><ellipse cx="250.76125" cy="535.91894" rx="6.76007" ry="21.53369" transform="translate(-527.88327 250.3368) rotate(-64.62574)" fill="#2f2e41"/><path d="M278.11489,571.43931c0,4.21515,10.85328,12.53858,22.89658,12.53858s23.33514-11.867,23.33514-16.08209-11.29193.81774-23.33514.81774S278.11489,567.22416,278.11489,571.43931Z" transform="translate(-186.96827 -282.49498)" fill="#fff"/><circle cx="437.43059" cy="266.55376" r="43.06733" fill="#2f2e41"/><rect x="417.80497" y="300.35345" width="13.08374" height="23.44171" fill="#2f2e41"/><rect x="443.97246" y="300.35345" width="13.08373" height="23.44171" fill="#2f2e41"/><ellipse cx="614.67632" cy="609.56272" rx="4.08868" ry="10.90314" transform="translate(-380.98869 635.94194) rotate(-65.66457)" fill="#2f2e41"/><ellipse cx="639.84386" cy="608.01756" rx="4.08868" ry="10.90314" transform="translate(-373.54441 635.54758) rotate(-64.10219)" fill="#2f2e41"/><path d="M582.62211,508.99744c-3.47748-15.57379,7.63865-31.31042,24.82866-35.1488s33.94421,5.67511,37.42169,21.2489-7.91492,21.31769-25.10486,25.156S586.0996,524.57124,582.62211,508.99744Z" transform="translate(-186.96827 -282.49498)" fill="#28a745"/><ellipse cx="665.50252" cy="524.92757" rx="23.89244" ry="7.50055" transform="translate(-363.18854 342.1587) rotate(-45.0221)" fill="#2f2e41"/><ellipse cx="581.79716" cy="564.92757" rx="23.89244" ry="7.50055" transform="translate(-300.4362 699.8503) rotate(-75.1366)" fill="#2f2e41"/></svg>
                <Carousel.Caption>
                    <h3 classname="text-classic">First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
                <Carousel.Item>
                    <svg id="e4744e0b-ee3a-4289-b7cd-f5efd80fd01c" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="825.80315" height="300" viewBox="0 0 825.80315 467"><polygon points="155.06 453.964 142.8 453.964 140.968 406.676 155.062 406.677 155.06 453.964" fill="#ffb8b8"/><path d="M345.28458,682.34851l-39.53052-.00146v-.5a15.38605,15.38605,0,0,1,15.38647-15.38623h.001l24.1438.001Z" transform="translate(-187.09843 -216.5)" fill="#2f2e41"/><polygon points="224.114 453.964 236.373 453.964 238.206 406.676 224.111 406.677 224.114 453.964" fill="#ffb8b8"/><path d="M408.08477,666.4618l24.1438-.001h.001A15.38605,15.38605,0,0,1,447.616,681.84705v.5l-39.53052.00146Z" transform="translate(-187.09843 -216.5)" fill="#2f2e41"/><path d="M411.53392,664.40386a4.52007,4.52007,0,0,1-4.39405-3.52246L376.7534,528.34234a1.45736,1.45736,0,0,0-1.46411-1.17383h-.00757a1.45833,1.45833,0,0,0-1.46021,1.18847L345.917,660.00249a4.52164,4.52164,0,0,1-4.40234,3.56641H328.2219a4.50015,4.50015,0,0,1-4.49218-4.76563L333.6306,491.9478l3.98413-1.17871.0747.001,78.25806.68457L432.615,658.12652a4.49788,4.49788,0,0,1-4.11645,4.92187l-16.604,1.34082Q411.71324,664.40387,411.53392,664.40386Z" transform="translate(-187.09843 -216.5)" fill="#2f2e41"/><circle cx="192.11811" cy="96.97873" r="24.56103" fill="#a0616a"/><path d="M364.17039,510.24175a42.39306,42.39306,0,0,1-12.72754-1.791,28.09705,28.09705,0,0,1-17.03808-14.375,4.50537,4.50537,0,0,1-.335-3.35449c2.70875-9.24511,15.79859-57.30078,7.44678-95.50293a40.48485,40.48485,0,0,1,5.75513-31.11426,39.97673,39.97673,0,0,1,25.927-17.43847l.00025-.001c1.38525-.27051,2.77807-.49219,4.13916-.66015a39.83565,39.83565,0,0,1,32.25781,10.61328,40.82033,40.82033,0,0,1,12.81567,32.36035L415.99266,491.982a4.46,4.46,0,0,1-2.39795,3.70313C406.20213,499.55913,383.9951,510.24175,364.17039,510.24175Z" transform="translate(-187.09843 -216.5)" fill="#ccc"/><path d="M339.80433,493.32855a10.74272,10.74272,0,0,0,3.84155-16.01843l8.033-78.54005H334.31878l-6.384,76.69032a10.80091,10.80091,0,0,0,11.86954,17.86816Z" transform="translate(-187.09843 -216.5)" fill="#a0616a"/><path d="M352.90684,361.58805h0a14.22883,14.22883,0,0,1,11.391,14.94173l-2.39258,34.243a4,4,0,0,1-5.16111,3.546l-28.82426-8.82365a4,4,0,0,1-2.56243-5.261l11.46611-29.805A14.22883,14.22883,0,0,1,352.90684,361.58805Z" 
                        transform="translate(-187.09843 -216.5)" fill="#ccc"/><path d="M406.963,295.39956a30.15571,30.15571,0,0,0-33.0527-18.58366l7.744,6.2578c-9.62157.324-19.74953-.36492-26.61937,6.37932,2.18707-.06067,5.05354,4.61732,7.24061,4.55664-4.08894.08088-7.79672,2.95388-9.60281,6.62321a18.86531,18.86531,0,0,0-1.114,11.99709c.8076,4.00921,6.96814,13.40165,8.62634,17.14011-.28516-9.77014,18.94922-33.0744,28.3418-30.64233a25.7722,25.7722,0,0,0-11.90045,9.03527,34.9042,34.9042,0,0,1,20.70091-3.38707,14.65,14.65,0,0,0,4.935.27623,6.02513,6.02513,0,0,0,3.57207-9.62851Z" transform="translate(-187.09843 -216.5)" fill="#2f2e41"/><path d="M569.09843,683.5h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-187.09843 -216.5)" fill="#3f3d56"/><rect x="812.80315" y="29" width="6" height="1" fill="#e6e6e6"/><path d="M987.78048,246.5H975.65939v-1h12.12109Zm-24.24243,0H951.417v-1h12.12109Zm-24.24243,0h-12.1211v-1h12.1211Zm-24.24243,0h-12.1211v-1h12.1211Zm-24.24244,0H878.68966v-1h12.12109Zm-24.24243,0H854.44723v-1h12.12109Zm-24.24243,0H830.2048v-1h12.12109Zm-24.24243,0H805.96237v-1h12.12109Zm-24.24243,0h-12.1211v-1H793.841Zm-24.24243,0H757.4775v-1h12.1211Zm-24.24244,0H733.23507v-1h12.12109Zm-24.24243,0H708.99264v-1h12.12109Zm-24.24243,0H684.75021v-1H696.8713Zm-24.24243,0H660.50753v-1h12.12134Zm-24.24243,0h-12.1211v-1h12.1211Zm-24.24243,0H612.02267v-1H624.144Z" transform="translate(-187.09843 -216.5)" fill="#e6e6e6"/><rect x="406.80315" y="29" width="6" height="1" fill="#e6e6e6"/><rect x="615.80315" y="122" width="6" height="1" fill="#e6e6e6"/><path d="M790.96017,339.5H779.019v-1h11.94116Zm-23.88233,0H755.13668v-1h11.94116Zm-23.88232,0H731.25436v-1h11.94116Zm-23.88232,0H707.372v-1H719.3132Zm-23.88233,0h-11.9414v-1h11.9414Zm-23.88257,0H659.60714v-1H671.5483Zm-23.88232,0H635.72482v-1H647.666Zm-23.88233,0H611.84249v-1h11.94116Z" transform="translate(-187.09843 -216.5)" fill="#e6e6e6"/><rect x="406.80315" y="122" width="6" height="1" fill="#e6e6e6"/><rect x="498.80315" y="166" width="6" height="1" fill="#e6e6e6"/><path d="M673.61593,383.5H661.33029v-1h12.28564Zm-24.57153,0H636.75875v-1H649.0444Zm-24.57129,0H612.18746v-1h12.28565Z" transform="translate(-187.09843 -216.5)" fill="#e6e6e6"/><rect x="406.80315" y="166" width="6" height="1" fill="#e6e6e6"/>
                        <path d="M1006.0715,256.51V427.77a32.53759,32.53759,0,0,1-32.5,32.5h-348a32.3954,32.3954,0,0,1-24.16993-10.8v-1.53a31.40764,31.40764,0,0,0,23.97022,11.33l60.18994-60.19a8.49808,8.49808,0,0,1,12.02,0l31.98975,31.98,74.99023-74.98a8.49808,8.49808,0,0,1,12.02,0l43.98975,43.98,143.51025-143.5.98975-.03.46-.01Z" transform="translate(-187.09843 -216.5)" fill="#28a745"/><path d="M973.90157,460.5h-348a32.53685,32.53685,0,0,1-32.5-32.5V249a32.53685,32.53685,0,0,1,32.5-32.5h348a32.53684,32.53684,0,0,1,32.5,32.5V428A32.53684,32.53684,0,0,1,973.90157,460.5Zm-348-243a31.5357,31.5357,0,0,0-31.5,31.5V428a31.5357,31.5357,0,0,0,31.5,31.5h348a31.53569,31.53569,0,0,0,31.5-31.5V249a31.53569,31.53569,0,0,0-31.5-31.5Z" transform="translate(-187.09843 -216.5)" fill="#3f3d56"/><path d="M626.25509,460.35352l-.707-.707,60.34326-60.34326a8.50871,8.50871,0,0,1,12.02051,0L729.90157,431.293l74.98975-74.98975a8.50871,8.50871,0,0,1,12.02051,0L860.90157,400.293l144.64649-144.64649.707.707L860.90157,401.707,816.2048,357.01025a7.49965,7.49965,0,0,0-10.60645,0L729.90157,432.707,697.2048,400.01025a7.50909,7.50909,0,0,0-10.60645,0Z" transform="translate(-187.09843 -216.5)" fill="#3f3d56"/><circle cx="504.80315" cy="166.5" r="7" fill="#3f3d56"/><circle cx="621.80315" cy="122.5" r="7" fill="#3f3d56"/><circle cx="818.80315" cy="29.5" r="7" fill="#3f3d56"/><ellipse cx="171.4688" cy="254.69423" rx="26.28967" ry="37.41601" fill="#3f3d56"/><ellipse cx="171.4688" cy="254.69423" rx="26.28967" ry="37.41601" opacity="0.1" style={{isolation:"isolate"}}/><ellipse cx="175.01348" cy="254.69423" rx="26.28967" ry="37.41601" fill="#3f3d56"/><ellipse cx="175.01348" cy="254.69422" rx="22.54807" ry="32.09088" opacity="0.1" style={{isolation:"isolate"}}/><path d="M361.91656,486.65213v-3.767a8.74716,8.74716,0,0,1-5.0232-1.64113l.78787-2.49886a8.02982,8.02982,0,0,0,4.72777,1.60363,3.621,3.621,0,0,0,3.907-3.655c0-2.05143-1.28048-3.31943-3.71-4.43846-3.34886-1.4918-5.41723-3.2076-5.41723-6.45237a5.86421,5.86421,0,0,1,4.95765-6.00493v-3.767h2.03552v3.61789a7.988,7.988,0,0,1,4.26817,1.30534l-.8209,2.4617a7.255,7.255,0,0,0-4.13675-1.26817,3.152,3.152,0,0,0-3.48016,3.2076c0,1.93943,1.21478,2.90913,4.07118,4.252,3.38157,1.56647,5.08893,3.5059,5.08893,6.82531a6.24154,6.24154,0,0,1-5.18752,6.34037v3.87922Z" transform="translate(-187.09843 -216.5)" fill="#28a745"/><path d="M376.18518,449.75941a10.52626,10.52626,0,0,1,1.62647.3192l37.64605-32.28412-2.20057-11.84534,17.44265-5.65756,5.93357,20.59125a8,8,0,0,1-3.40936,8.97532l-47.67745,30.1704a10.4971,10.4971,0,1,1-9.36136-10.26915Z" transform="translate(-187.09843 -216.5)" fill="#a0616a"/><path d="M408.44,362.82113l0,0a14.22885,14.22885,0,0,1,16.34482,9.26593l11.25127,32.43013a4,4,0,0,1-3.35327,5.28837l-29.97332,3.20857a4,4,0,0,1-4.4231-3.83151l-1.16377-31.9132A14.22883,14.22883,0,0,1,408.44,362.82113Z" transform="translate(-187.09843 -216.5)" fill="#ccc"/>
                    </svg>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <svg id="ae8e3b67-68ad-47ca-99a9-8e5b053c0a6f" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="974.75537" height="300" viewBox="0 0 974.75537 674.09487"><path d="M200.71917,407.36064c-18.046,14.76488,11.48379,144.36789,11.48379,144.36789s6.56217,197.68563,20.50679,206.70858,45.115-.82032,57.419-2.46083,1.64052-123.86109-16.40545-168.976S269.622,476.26352,269.622,476.26352l97.61237,18.86628s-59.05961,50.0366-56.59878,60.70013,65.62174,46.75545,77.10558,48.396,33.6311-65.62174,53.31769-111.557-134.52456-75.46506-134.52456-75.46506l-21.32711-40.19333S218.76519,392.59577,200.71917,407.36064Z" transform="translate(-112.62232 -112.95256)" fill="#2f2e41"/><path d="M249.71,761.841s-5.95236,20.83329,0,20.83329,16.865,5.95236,33.73,3.96824,11.90467-22.81735,0-25.79356-8.92851-26.78565-8.92851-26.78565c-3.9683-7.93648-22.81741,1.98412-22.81741,1.98412Z" transform="translate(-112.62232 -112.95256)" fill="#2f2e41"/><path d="M334.21617,596.17371s-10.21191,19.10945-4.39346,20.36467,15.23047,9.37512,32.13464,10.99219,16.44885-19.79375,5.43949-25.21351-3.079-28.06614-3.079-28.06614c-2.20534-8.59483-22.72269-2.87236-22.72269-2.87236Z" transform="translate(-112.62232 -112.95256)" fill="#2f2e41"/><path d="M211.7928,229.77171c1.64051,3.28109-5.74192,44.29468-5.74192,44.29468l6.56218,11.48381s37.73255-14.76481,31.99063-17.22565-4.92166-32.81089-4.92166-32.81089S210.15228,226.49062,211.7928,229.77171Z" transform="translate(-112.62232 -112.95256)" fill="#ffb9b9"/><circle cx="113.37253" cy="79.16753" r="50.29399" fill="#2f2e41"/><circle cx="109.90398" cy="32.08409" r="20.81129" fill="#2f2e41"/><path d="M231.63121,154.4627a21.0442,21.0442,0,0,0,2.16787.11252,20.81133,20.81133,0,1,0,0-41.62266,21.0442,21.0442,0,0,0-2.16787.11252,20.81211,20.81211,0,0,1,0,41.39762Z" transform="translate(-112.62232 -112.95256)" fill="#2f2e41"/><circle cx="114.75567" cy="103.69483" r="34.45142" fill="#ffb9b9"/><path d="M177.75143,269.55494c-10.66358,2.4608-28.70955,28.70952-28.70955,28.70952L177.75143,326.974s20.5068,77.10557,22.96763,80.38666c16.12166,21.49552,88.58941-26.24868,88.58941-26.24868s-2.871-23.37776-1.23041-34.86157c1.57784-11.04477-6.152-33.221-6.152-33.221s27.069-11.48381,21.32711-22.96762-41.01365-37.7325-55.77852-28.70952-44.29468,0-44.29468,0S188.415,267.09414,177.75143,269.55494Z" transform="translate(-112.62232 -112.95256)" fill="#e6e6e6"/><path d="M387.33106,434.8398s46.75545,40.19337,58.2393,31.99061-44.29468-36.91227-44.29468-36.91227Z" transform="translate(-112.62232 -112.95256)" fill="#ffb9b9"/><path d="M177.34139,420.89516c6.56218,7.38247,37.73255-11.48381,33.73637-19.86222s-28.81477,8.37841-28.81477,8.37841S170.77921,413.51269,177.34139,420.89516Z" transform="translate(-112.62232 -112.95256)" fill="#ffb9b9"/><path d="M177.75149,309.74827l-34.45141,63.98122s39.373,32.81092,44.29462,33.63115-9.84327,22.14734-9.84327,22.14734-44.29468-31.17035-61.52039-46.75551,32.8109-84.488,32.8109-84.488l14.76493-9.023Z" transform="translate(-112.62232 -112.95256)" fill="#e6e6e6"/><path d="M277.82469,307.2875,318.018,369.62817s61.52044,68.90288,69.72314,72.18394,18.046-12.3041,18.046-12.3041l-73.82448-89.40967-27.88923-50.0366-10.66353-4.10135Z" transform="translate(-112.62232 -112.95256)" fill="#e6e6e6"/><ellipse cx="113.37253" cy="62.76198" rx="34.68552" ry="20.81131" fill="#2f2e41"/><path d="M323.29931,624.742a4.29286,4.29286,0,0,0-4.28784,4.28783V775.27447a4.2928,4.2928,0,0,0,4.28784,4.28777h498.6688a4.29285,4.29285,0,0,0,4.28778-4.28777V629.02977a4.29283,4.29283,0,0,0-4.28778-4.28784Z" transform="translate(-112.62232 -112.95256)" fill="#e6e6e6"/><path d="M329.75661,768.81711H815.51047V635.48718H329.75661Z" transform="translate(-112.62232 -112.95256)" fill="#fff"/><path d="M754.19649,741.15725a7.10265,7.10265,0,1,0,0,14.20529H782.607a7.10264,7.10264,0,1,0,0-14.20529H754.19649Z" transform="translate(-112.62232 -112.95256)" fill="#28a745"/><rect x="349.1219" y="614.42769" width="327.96547" height="1.86875" fill="#e6e6e6"/><circle cx="280.56677" cy="589.19958" r="41.36917" fill="#28a745"/><polygon points="349.64 603.993 348.604 602.438 382.684 579.717 406.054 590.935 439.669 569.459 506.537 597.983 559.787 571.825 611.495 592.788 676.468 535.241 677.707 536.64 611.867 594.956 559.86 573.871 506.591 600.038 439.843 571.565 406.184 593.071 382.835 581.864 349.64 603.993" fill="#3f3d56"/><path d="M467.81765,742.1343a6.07344,6.07344,0,1,0,0,12.14687h63.53747a6.07344,6.07344,0,0,0,0-12.14687Z" transform="translate(-112.62232 -112.95256)" fill="#e6e6e6"/><path d="M408.98917,683.6448h6.46415l-13.45045,13.311a12.5581,12.5581,0,0,1-17.63115,0l-13.44867-13.311h6.46416l10.21748,10.112a7.95365,7.95365,0,0,0,11.167,0ZM377.305,720.65949h-6.46416l13.53272-13.39324a12.55811,12.55811,0,0,1,17.63114,0l13.53272,13.39324h-6.46416l-10.30153-10.19424a7.95365,7.95365,0,0,0-11.167,0Z" transform="translate(-112.62232 -112.95256)" fill="#fff"/><path d="M388.23446,156.30683a4.29285,4.29285,0,0,0-4.28783,4.28784V306.83934a4.2928,4.2928,0,0,0,4.28783,4.28778H886.90327a4.29287,4.29287,0,0,0,4.28777-4.28778V160.59464a4.29282,4.29282,0,0,0-4.28777-4.28784Z" transform="translate(-112.62232 -112.95256)" fill="#e6e6e6"/><path d="M394.69176,300.382H880.44562V167.05205H394.69176Z" transform="translate(-112.62232 -112.95256)" fill="#fff"/><path d="M819.13164,272.72212a7.10265,7.10265,0,1,0,0,14.2053h28.41054a7.10265,7.10265,0,0,0,0-14.2053H819.13164Z" transform="translate(-112.62232 -112.95256)" fill="#28a745"/><rect x="414.05705" y="145.99257" width="327.96547" height="1.86875" fill="#e6e6e6"/><circle cx="345.50192" cy="120.76445" r="41.36917" fill="#28a745"/><polygon points="414.575 135.557 413.539 134.002 447.619 111.282 470.989 122.5 504.604 101.024 505.058 101.217 571.472 129.548 624.722 103.39 676.43 124.353 741.403 66.805 742.642 68.204 676.802 126.52 624.795 105.436 571.527 131.603 504.779 103.13 471.119 124.635 447.77 113.427 414.575 135.557" fill="#3f3d56"/><path d="M532.7528,273.69917a6.07344,6.07344,0,0,0,0,12.14687h63.53747a6.07343,6.07343,0,1,0,0-12.14687Z" transform="translate(-112.62232 -112.95256)" fill="#e6e6e6"/><path d="M474.76928,228.88845c.77325-5.17689-3.16839-7.95986-8.558-9.8164l1.74833-7.01275-4.26991-1.06383-1.70212,6.82795c-1.121-.27963-2.27356-.54346-3.41884-.80486l1.71428-6.87294-4.26626-1.06383-1.74954,7.01033c-.92887-.21155-1.84073-.42067-2.72583-.64073l.00486-.02188-5.88692-1.46991-1.13556,4.55926s3.16717.72584,3.1003.77082a2.27049,2.27049,0,0,1,1.98905,2.48268l-1.99148,7.989a3.53766,3.53766,0,0,1,.44376.14225l-.44985-.11185-2.7927,11.19147a1.55379,1.55379,0,0,1-1.95623,1.014c.04256.062-3.10273-.77447-3.10273-.77447l-2.11914,4.88753,5.55622,1.38481c1.03343.259,2.0462.53009,3.04194.7854l-1.76656,7.09422,4.26382,1.06383,1.75076-7.01762c1.16353.31611,2.29422.6079,3.40061.88267l-1.74346,6.9848,4.26869,1.06382,1.76656-7.07962c7.279,1.3775,12.75378.82188,15.0553-5.76048,1.85653-5.30091-.09119-8.35865-3.921-10.35379,2.789-.64559,4.89-2.48024,5.45045-6.2699Zm-9.7544,13.67658c-1.32036,5.30091-10.24436,2.43647-13.13919,1.71671l2.34407-9.39694c2.89361.72219,12.17141,2.152,10.79634,7.68023Zm1.31915-13.75317c-1.20365,4.82187-8.63221,2.372-11.04315,1.77142l2.12523-8.52278C459.82705,222.6611,467.58874,223.78208,466.334,228.81186Z" transform="translate(-112.62232 -112.95256)" fill="#fff"/><path d="M584.4211,390.5244a4.29284,4.29284,0,0,0-4.28783,4.28783V541.0569a4.2928,4.2928,0,0,0,4.28783,4.28778h498.66881a4.29285,4.29285,0,0,0,4.28777-4.28778V394.8122a4.29281,4.29281,0,0,0-4.28777-4.28783Z" transform="translate(-112.62232 -112.95256)" fill="#e6e6e6"/><path d="M590.8784,534.59954h485.75386V401.26962H590.8784Z" transform="translate(-112.62232 -112.95256)" fill="#fff"/><path d="M1015.31828,506.93968a7.10265,7.10265,0,1,0,0,14.2053h28.41054a7.10265,7.10265,0,1,0,0-14.2053h-28.41054Z" transform="translate(-112.62232 -112.95256)" fill="#28a745"/><rect x="610.24369" y="380.21013" width="327.96547" height="1.86875" fill="#e6e6e6"/><circle cx="541.68856" cy="354.98202" r="41.36917" fill="#28a745"/><polygon points="610.762 369.775 609.725 368.22 643.805 345.5 667.176 356.718 700.79 335.242 701.245 335.435 767.658 363.766 820.909 337.608 872.617 358.57 937.59 301.023 938.829 302.423 872.989 360.738 820.982 339.654 767.713 365.821 700.966 337.348 667.305 358.853 643.957 347.646 610.762 369.775" fill="#3f3d56"/><path d="M728.93944,507.91674a6.07343,6.07343,0,0,0,0,12.14687h63.53747a6.07343,6.07343,0,1,0,0-12.14687Z" transform="translate(-112.62232 -112.95256)" fill="#e6e6e6"/><polygon points="541.684 382.247 558.431 358.662 541.684 368.55 541.684 368.55 524.947 358.662 541.683 382.247 541.683 382.247 541.684 382.247 541.684 382.247 541.684 382.247" fill="#fff"/><polygon points="541.683 365.381 541.683 365.381 541.684 365.381 541.684 365.381 558.421 355.488 541.684 327.717 541.684 327.717 541.684 327.717 541.683 327.717 541.683 327.717 524.947 355.488 541.683 365.381" fill="#fff"/></svg>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
                </div>
            </div>
            

    </div>

    );
}

export default ExpPage;