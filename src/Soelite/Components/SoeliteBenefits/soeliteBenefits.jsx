import React from "react";
import Tofu from "../../soeliteAssects/TofuLabel.jpg";
import Milk from "../../soeliteAssects/soyamilk.jpg";
import "./soeliteBenefits.css";

export default function SoeliteBenefits() {
  return (
    <div className="soeliteBenefitInfo">
      <h1 className="titleBenefit">Soelite Benefits</h1>
      <div className="soyaMilkProductBenefit">
        <h1>Health Benefits of Tofu</h1>
        <div className="tofuCardBenefit">
          <div className="tofuProductDetailsBenefit">
            <ul className="tofuTypesBenefit">
              <li>Improve metabolic rate</li>
              <li>Strengthen bones</li>
              <li>Decreases bone lose</li>
              <li>Aids in maintaining cholesterol</li>
              <li> May reduce the risk of anemia </li>
              <li>May prevent cancer in a post-menopausal woman </li>
              <li>May lower down Aging rate</li>
              <li>May prevent leaver damage</li>
              <li>Improve immune system</li>
              <li>Fights obesity</li>
              <li>Help weight loss </li>
              <li> Keep wrinkles and lines away</li>
              <li>Lower rate of heart disease</li>
            </ul>
          </div>
          <img className="tofuImage" src={Tofu} alt="Quality" />
        </div>
      </div>
      <div className="soyaMilkProductBenefit">
        <h1>Benefits of Soya Milk</h1>
        <div className="tofuCardBenefit">
          <div className="milkProductDetailsBenefit">
            <ul className="milkTypesBenefit">
              <li>Gluten-Free</li>
              <li>Lactose-Free</li>
              <li>
                An important source of protein as contains all 9 essential amino
                acids.
              </li>
              <li>
                Improves Lipid Profile-It is Cholesterol Free and the MUFA, PUFA
                can inhibit the transport of cholesterol into your bloodstream
              </li>
              <li>
                Promote Weight Loss- is low in sugar. MUFA in soymilk inhibits
                intestinal absorption of fat. Also high in fiber.
              </li>
              <li>
                Reduces the risk of Prostate Cancer- is a rich source of
                phytoestrogen, which inhibits the production of testosterone in
                men and significantly cuts the risk of prostate cancer.
              </li>
              <li>
                Prevent Postmenopausal Syndromes since phytoestrogen in soy is
                an effective estrogen replacement.
              </li>
              <li>
                Prevent Osteoporosis - Drinking soy milk also helps boost your
                calcium and iron.
              </li>
            </ul>
          </div>
          <img className="milkImage" src={Milk} alt="Health" />
        </div>
      </div>
    </div>
  );
}
