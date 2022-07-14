import styled from "styled-components"

const Image = styled.img`
    max-width: 175px;
    max-height: 175px;
`;

const Title = styled.div`
    font-size: 13px;
    margin-top: 4px;
    color: rgb(62, 65, 69);
    width: 100%;
    white-space: pre-wrap;
    text-align: center;
    height: 38px;
    overflow: hidden;
    cursor: pointer;
    word-break: break-word;
    overflow-wrap: break-word;
`;

const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Discount = styled.div`
    width: 40px;
    height: 25px;
    border-radius: 2px;
    margin-top: 5px;
    text-align: center;
    padding-left: 5px;
    background: rgb(255, 0, 0);
    color: #fff;
    font-weight: 700;
    margin-right: 11px;
`;

const Price = styled.div`
    margin-top: 10px;
    padding-bottom: 15px;
`;

const RealPrice = styled.div`
    font-size: 13px;
    text-align: left;
    color: #848689;
    position: relative;
    display: block;
    text-decoration: line-through;
    font-weight: 400;
`;

const DiscountPrice = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    color: #3e4145;
    display: block;
    cursor: pointer;
    white-space: nowrap;
`;

const Seller = styled.img`
    height: 45px;
`;

function TodaysDealsSlideItem(props) {
  return (
    <div className="px-5">
        <div className="d-flex justify-content-center">
            <Image className="w-100" src={props.image} alt={props.title} />
        </div>
        <div>
            <Title>{props.title}</Title>
        </div>
        <div>
            <PriceWrapper className="border-bottom">
                <Discount>
                    {props.discount}
                </Discount>
                <Price>
                    <RealPrice>
                        {props.price}
                    </RealPrice>
                    <DiscountPrice>
                        {props.discountPrice}
                    </DiscountPrice>
                </Price>
            </PriceWrapper>
        </div>
        <div className="d-flex justify-content-center h-100 py-3">
            <Seller src={props.seller} alt={props.title} />
        </div>
    </div>
  )
}

export default TodaysDealsSlideItem