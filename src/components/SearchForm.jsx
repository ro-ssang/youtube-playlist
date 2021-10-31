import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import SeachIcon from '../icons/SearchIcon';

const Form = styled.form`
  position: relative;
  margin-top: 1.25rem;
  padding: 0px 1.5625rem;

  & {
    input {
      width: 100%;
      height: 32px;
      border-radius: 4px;
      padding-left: 2rem;
      border: 1px solid ${(props) => props.theme.searchboxBorderColor};
      background: ${(props) => props.theme.searchboxBackground};
      color: ${(props) => props.theme.searchboxTextColor};
    }
  }
`;

function SearchForm({ history }) {
  const [term, setTerm] = useState('');

  const onChangeInput = useCallback((e) => {
    setTerm(e.target.value);
  }, []);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      history.push(`/search?q=${term}`);
      setTerm('');
    },
    [history, term]
  );

  return (
    <Form onSubmit={onSubmitForm}>
      <SeachIcon />
      <input type="text" placeholder="음악을 검색하세요" onChange={onChangeInput} value={term} />
    </Form>
  );
}

export default withRouter(SearchForm);
