"use client";

export default function Footer() {
  const footerNotices = [
    `1.Apple Intelligence는 Siri 및 기기 언어를 한국어, 중국어(간체), 영어(오스트레일리아, 캐나다, 인도, 아일랜드, 뉴질랜드, 싱가포르, 남아프리카 공화국, 영국, 미국), 프랑스어, 독일어, 일본어, 포르투갈어
    (브라질), 스페인어로 설정한 iPhone 16 전체 모델, iPhone 15 Pro Max, iPad mini(A17 Pro 모델) 그리고 M1 이후 iPad 및 Mac 모델에서 베타로 사용할 수 있으며, iOS 18, iPadOS 18,
    macOS Sequoia 소프트웨어 업데이트를 통해 제공됩니다. 올해 안으로 계속해서 베트남어를 비롯한 지원 언어를 추가해 나갈 예정입니다. 일부 기능은 한국어로 제공되지 않습니다.`,

    `2. ₩1,000,000은 iPhone 15 Pro Max 1TB 모델의 보상 판매 금액으로, 보상 판매 서비스는 Apple의 보상 판매 파트너사를 통해 제공됩니다. Apple 및 Apple의 계열사는 고객과 파트너 간 계약의 당사자가 아닙니다. 보상
    판매 견적액은 예상 금액일 뿐이며, 실제 보상 판매 금액이 예상 금액보다 낮을 수도 있습니다. 보상 판매 금액은 보상 판매 대상이 되는 제품의 상태, 연도, 모델, 그리고 보상 판매 대상이 되는 제품이 최초 판매된 국가/지역에 따라
    달라집니다. 일부 기기는 보상 판매 대상이 아닙니다. 기기를 보상 판매하기 위해서는 민법상 성년이어야 합니다. 보상 판매 금액은 적용 가능한 새 기기 구입 시 적용하거나 Apple Store Gift Card로 받을 수 있습니다. 새 Apple
    기기 구매 시, 현재 소유한 기기의 가치만큼 할인을 받을 수도 있습니다. 최종 확정 금액은 보상 판매 대상 기기를 수령한 후, 예상 금액 산정 시 제시한 기기의 설명과 일치하는지 비교 검수 후 정해집니다. 부가세는 새로 구입한 기기의
    총액을 바탕으로 부과됩니다. 일부 매장에서는 보상 판매를 제공하지 않으며, 매장 내 보상 판매와 온라인 보상 판매 프로그램 간 내용에 차이가 있을 수 있습니다. 일부 매장은 추가 요구 사항이 있을 수 있습니다. Apple의 보상 판매
    파트너는 보상 판매 거래를 거부, 취소하거나 보상 판매 수량을 제한할 권리를 보유합니다. 적용 대상 기기의 보상 판매 및 재활용에 대한 자세한 내용은 Apple의 보상 판매 파트너사에서 확인할 수 있습니다. 규제 및 제한이 적용될 수
    있습니다.`,

    `Apple TV+ 이용을 위해서는 구독이 필요합니다.`,

    `기능은 변경될 수 있습니다. 일부 기능, 애플리케이션 및 서비스를 이용할 수 없는 국가나 언어도 있습니다.`,
  ];

  const footerSections = [
    [
      {
        title: "쇼핑 및 알아보기",
        links: [
          "스토어",
          "Mac",
          "iPad",
          "iPhone",
          "Watch",
          "Vision",
          "AirPods",
          "TV 및 홈",
          "AirTag",
          "액세서리",
        ],
      },
      {
        title: "Apple 지갑",
        links: ["지갑", "Apple Pay"],
      },
    ],
    [
      {
        title: "계정",
        links: ["Apple 계정 관리", "Apple Store 계정", "iCloud.com"],
      },
      {
        title: "엔터테인먼트",
        links: [
          "Apple One",
          "Apple TV+",
          "Apple Music",
          "Apple Arcade",
          "Apple 팟캐스트",
          "Apple Books",
          "Apple Store",
        ],
      },
    ],
    [
      {
        title: "Apple Store",
        links: [
          "매장 찾기",
          "Genius Bar",
          "Today at Apple",
          "그룹예약",
          "Apple 캠프",
          "Apple Store 앱",
          "인증 리퍼비쉬 제품",
          "Apple Trade In",
          "할부 방식",
          "주문 상태",
          "쇼핑 도움말",
        ],
      },
    ],
    [
      {
        title: "비즈니스",
        links: ["Apple과 비즈니스", "비즈니스를 위한 제품 쇼핑하기"],
      },
      {
        title: "교육",
        links: [
          "Apple과 교육",
          "초중고용 제품 쇼핑하기",
          "대학 생활을 위한 제품 쇼핑하기",
        ],
      },
    ],
    [
      {
        title: "Apple의 가치관",
        links: ["손쉬운 사용", "교육", "환경", "개인정보 보호", "공급망"],
      },
      {
        title: "Apple 정보",
        links: [
          "Newsroom",
          "Apple 리더십",
          "채용 안내",
          "윤리 및 규정 준수",
          "이벤트",
          "일자리 창출",
          "Apple 연락처",
        ],
      },
    ],
  ];

  const footerLinks = [
    { text: "개인정보 처리 방침", href: "#" },
    { text: "웹 사이트 이용 약관", href: "#" },
    { text: "판매 및 환불", href: "#" },
    { text: "법적 고지", href: "#" },
    { text: "사이트 맵", href: "#" },
  ];

  return (
    <footer className="bg-[#f5f5f7] text-xs text-gray-700 py-10">
      <section className="flex flex-col items-center gap-y-4">
        {footerNotices.map((text, idx) => (
          <div key={idx} className="max-w-[1200px] w-full mx-auto px-4">
            <p className="text-[#8D8D8F] whitespace-pre-line">{text}</p>
          </div>
        ))}
      </section>

      <div className="w-full max-w-[1200px] mx-auto px-4 ">
        <hr className="w-full h-[1px] bg-gray-300 border-0 my-8" />
      </div>

      <section>
        <div className="grid grid-cols-5 gap-6 max-w-[1200px] mx-auto px-4">
          {footerSections.map((column, colIdx) => (
            <div key={colIdx}>
              {column.map((section, secIdx) => (
                <div key={secIdx} className={secIdx !== 0 ? "mt-4" : ""}>
                  <h4 className="font-bold mb-2">{section.title}</h4>
                  <ul className="space-y-1">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a href="#" className="hover:underline">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className=" flex flex-col items-center ">
          <div className="m-[10px] w-[1200px] pl-[16px]">
            <p className="mt-[20px]">
              다양한 쇼핑 방법: <a href="#">Apple Store를 방문하거나</a>,
              <a href="#">리셀러</a>를 찾아보거나,<a href="#">080-330-8877</a>
              번으로 전화하세요.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full max-w-[1200px] mx-auto px-4 ">
        <hr className="w-full h-[1px] bg-gray-300 border-0 my-8" />
      </div>

      <section className="flex flex-col items-center gap-y-4 ">
        <div className="w-[1200px] pl-[16px] ">
          <div className="flex flex-row flex-wrap gap-x-4 text-[#8D8D8F] mb-[20px] text-[13px]">
            <p className="whitespace-nowrap">
              Copyright © 2025 Apple Inc. 모든 권리 보유.
            </p>
            <div className="flex flex-wrap gap-x-2 whitespace-nowrap">
              {footerLinks.map((link, index) => (
                <a key={index} href={link.href}>
                  {link.text}
                  {index < footerLinks.length - 1 && " |"}
                </a>
              ))}
            </div>
          </div>
          <div className="w-[1200px] ">
            <p className="text-[#8D8D8F] whitespace-pre-line">
              애플코리아 유한회사 | 대표이사 : Mark_Lee(마크리) | 주소 :
              서울특별시 강남구 영동대로 517 | 전화 : 080-333-4000 |{" "}
              <a href="#">http://support.apple.com/ko-kr</a> | 사업자 등록번호 :
              120-81-84429 | <br />
              통신판매업신고번호 : 제2011-서울강남-00810호 | 호스팅 서비스 제공
              : Apple Inc. | <a href="#">사업자정보</a>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
