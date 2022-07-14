import styled from "styled-components"
import TodaysDealsSlider from "./TodaysDealsSlider";

const Title = styled.h2`
    color: #4990e2;
    font-size: 17px;
    font-weight: bold;
    text-align: center;
`;

function TodaysDeals() {
  return (
    <div className="bg-white h-100 rounded pt-3">
        <Title>Günün Fırsatları</Title>
        <TodaysDealsSlider/>
    </div>
  )
}

export default TodaysDeals