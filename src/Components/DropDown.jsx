import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
`;

const DropdownBtn = styled.button`
    padding: 1% 13%;
    background-color: #fff;
    border: 1px solid #dcdcdc;
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 90%;
    white-space: nowrap;

    font-family: "Pretendard-Light";
    color: #545454;
`;

const DropdownMenu = styled.ul`
    position: absolute;
    top: 90%;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    list-style: none;
    padding: 1% 0;
    margin: 0;
    width: 100%;
`;

const DropdownItem = styled.button`
    padding: 5% 13%;
    background-color: ${(props) => (props.isActive ? "#D9F0FF" : "white")};
    width: 100%;
    text-align: left;
    cursor: pointer;
    font-family: "Pretendard-Light";
    color: #545454;

    &:hover {
        background-color: #d9f0ff;
    }
`;

function Dropdown({ options, label, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setselectedOption] = useState(label);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        onChange(option);
        setselectedOption(option);
        setIsOpen(false);
    };

    return (
        <DropdownContainer>
            <DropdownBtn onClick={toggleDropdown}>
                {selectedOption}
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </DropdownBtn>

            {isOpen && (
                <DropdownMenu>
                    {options.map((option, index) => (
                        <li key={index}>
                            <DropdownItem
                                className="dropdown-item"
                                onClick={() => handleOptionClick(option)}
                                isActive={option == selectedOption}
                            >
                                {option}
                            </DropdownItem>
                        </li>
                    ))}
                </DropdownMenu>
            )}
        </DropdownContainer>
    );
}

export default Dropdown;
