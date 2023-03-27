import styled from "styled-components";

export const PetPhotosSelectorContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    button {
        cursor: pointer;
        &:hover {
            opacity: .9;
        }
    }
`

interface PetPhotPreviewProps {
    isSelected?: boolean;
}

export const PetPhotPreview= styled.img<PetPhotPreviewProps>`
    height: 5rem;
    width: 5rem;
    border-radius: 15px;
    object-fit: cover;
    opacity: ${({isSelected}) => isSelected ? 1: 0.6};
    border: 4px solid ${({theme:{colors}}) => colors.blue[400]};
`