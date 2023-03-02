import styled from 'styled-components';
import { ReactComponent as IconMySearch } from '../../images/icon_search.svg';

export const FormSearch = styled.form`
  display: flex;
  gap: 3px;
`;

export const Input = styled.input`
  width: 288px;
  height: 32px;

  padding: 5px 5px 5px 48px;
  border: 1px solid #111321;
  border-radius: 20px;
  font: inherit;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

export const WrapSearch = styled.div`
  position: relative;
`;

export const IconSearch = styled(IconMySearch)`
  position: absolute;
  top: 8px;
  left: 12px;
`;
