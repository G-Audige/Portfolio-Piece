const books = [
  {
    title: 'Jorney to the West',
    id: 'QcpoDwAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=QcpoDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70oNqRUin7ZCeobBwbXTatTWEBGH-p7ybVEJm9RFUk0E9zmKRMtAxXqq9Fcsw7oZ4O-D4VBW9I8VFaPSbbj8UxmY0-dA-60FeGKKJSM31myOSP-qGXG9SWQFminHayZOYESVTRz&source=gbs_api',
  },
  {
    title: 'The Lord of the Rings',
    id: 'yl4dILkcqm4C',
    img: 'http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE728vmEKIVBsf5iwMo3xG354s2IYXSi3UsEIu8JBrw7IR4pKR3ey8Qh7lAxgB3h4pvLMREH6uHFxTiq5gfXqzce94dabvSjzqREmtyTJKE4Lnk_kyaa3q5uGX2Dg_WNR3zXbT416&source=gbs_api',
  },
  {
    title: 'Don Quixote',
    id: 'BupDAAAAcAAJ',
    img: 'http://books.google.com/books/content?id=BupDAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72nm-IlFhgUNekkMb0QPlGQ3B63LsvbJvxaGdvSPqoAZKcA39sJt50qnSig3uVRr0so__B4cumHqDTg7fMSx9QZWDVCSh5cRIBPWIeUVRjlY8Va-GSM1jcp-GLerVquK3otfnH-&source=gbs_api',
  },
  {
    title: 'The Art of War',
    id: 'y1vqObzzIF8C',
    img: 'http://books.google.com/books/content?id=y1vqObzzIF8C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71Rg1b90LaSL60U8tWbIPt2dwBLPC5toluOeFK9zh0Ttx5m-s1n5MBqDc7cmBlmfwn2JSZOYwsItMWPrtfQr7SOFkU0LHiXDc6JJBybkcIMZGSCmr_olIoLkOccMgcCIWKMaIGq&source=gbs_api',
  },
  {
    title: 'The Divine Comedy',
    id: 'wmacUwleJv8C',
    img: 'http://books.google.com/books/content?id=wmacUwleJv8C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71w8ZTAVY5Xz6KChem3rx33oZZ-qldeByehb50PU4kwE2a828-tPrqYQHDWNgazoX05PwF7oMBpXxCJ9ZWJnudFPMfdhMXWjIzwGnRmqZkkoo6-m5GXvslggeG0S_arilt9GnOi&source=gbs_api',
  },
  {
    title: "The Savior's Champion",
    id: '4HLOswEACAAJ',
    img: 'http://books.google.com/books/content?id=4HLOswEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72phfjFDJYkE_nbVdm4OId6W5uDK1012eqXDyn_ZN1ArEIBXodSAdfmi_ya_0i81Hzgmq20uIXJgErEd_Khm7aY1F8NBIvxROyy_dueMgoXaSF8kjRH7NMSebSKcsTFMXGpCrmk&source=gbs_api',
  },
  {
    title: 'Night Watch',
    id: 'QwKjEAAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=QwKjEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73nKEfNNCq23KnL2wNuzKEhONURPc5-o2cLiqBlVO0rmBHl-GphIJ29K4EOnYwbL4JnKmheOFHgcosAKKBufDiJoAjnWBG7I1mi2mj6AKTE0KyG5ojOFSKwxiTDFw4Obd-CIxsg&source=gbs_api',
  },
  {
    title: 'The House of Doors',
    id: 'h6ivEAAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=h6ivEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71HOEmVHapKx_tDqfM7m2xp_CIXjJTuG3ZTbSKXLsfreRyEcE-X_vPaD1if4Cr1XKwAFnG-6yjOnJB8UrtAsplF2LuFrRMTwI2N4veGeGq743X4QvM_qrUAx3BQC63J0RxH_hnc&source=gbs_api',
  },
  {
    title: 'The Brothers Karamazov',
    id: 'FdfFCwAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=FdfFCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70zULvddlMy-w16BFS_YKBJFFsjnn4z_bbJJI_qQ4XY5NaVPF-0ntMqEMR6UiGWK5O5eaPsDjVccqgCmDjdtPCGezOqKQFp3JD8s06OSTCK47HtnII7bahnBzOSaucWPHD-wq2m&source=gbs_api',
  },
  {
    title: 'The Dimensions of a Cave',
    id: 'GSqyEAAAQBAJ',
    img: 'http://books.google.com/books/publisher/content?id=GSqyEAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70kVCg_53UUnW4u5-DXoO1WgGU-Q3isMOXP0Kiz4Ix9MCBnpmc3uH1G5A36h7K-GQTlEBIrT-X8__3Pot1xoyyPhVGXRx7jXJMBKEuxL1JIMX_Nd4FCpO0Mehhj-C2GJPbwdU65&source=gbs_api',
  },
];

module.exports = books;
