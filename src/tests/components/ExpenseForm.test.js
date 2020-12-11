import React from 'react';
import {shallow} from 'Enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'
import moment from 'moment';

test('should render ExpenseForm correctly',() => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly whith data',() => {
  const wrapper = shallow(<ExpenseForm expense = {expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission',()=>{
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot(); // snapshot 1 avant le submit
  wrapper.find('form').simulate('submit',{ // on ce positionne sur la form et on simule l'evenement submit
    preventDefault:()=>{} //preventDefaut dans la page a besoin d'un event pour fonctionner, ici on envoi une fausse fonction pour que ça ne plante pas
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0); // En cas d'erreur, le submit va ajouter une erreur dans le state 'error', ici on vérifie qu'il est bien remplit
  expect(wrapper).toMatchSnapshot(); // snapshot 2 après le submit
});

test('should set description on input change',() => {
  const value = 'New Description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  }); // on ne positionne sur le premier input et on change sa valeur

  expect(wrapper.state('description')).toBe(value);

});

test('Should set note on textarea change',()=>{
  const value ='My new note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target:{value}
  });

  expect(wrapper.state('note')).toBe(value);

});

test('Should set amount on input change',()=>{
  const value ='123456';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target:{value}
  });

  expect(wrapper.state('amount')).toBe(value);

});

test('Should not set amount on input change with invalid data',()=>{
  const value ='123.456';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target:{value}
  });
  expect(wrapper.state('amount')).toBe('');
});

test('Should call onSubmit prop form valid form submission', ()=> {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>); // on appelle le composant en lui passant les data de test et la mocked fonction
  wrapper.find('form').simulate('submit',{ // on ce positionne sur la form et on simule l'evenement submit
    preventDefault:()=>{} //preventDefaut dans la page a besoin d'un event pour fonctionner, ici on envoi une fausse fonction pour que ça ne plante pas
  });
  expect(wrapper.state('error')).toBe('');
   expect(onSubmitSpy).toHaveBeenLastCalledWith({ // Ici, on s'assure que la fonction a bien été appellé avec les paramètres qui ont été passé sous forme de props au composant
    description: expenses[0].description,
    amount : expenses[0].amount,
    note: expenses[0].note,
    createdAt : expenses[0].createdAt,
  });
});

test('Should set new date on date change', ()=> {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now); // On recherche dans le composant ExpenseForm le composant SingleDatePicker puis on appelle la prop onDateChange en lui passant la date actuelle en parametre
  expect(wrapper.state('createdAt')).toEqual(now); // On vérifier que le state de wrapper a bien été modifié
});

test('should set focus calendar on change',()=> {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toEqual(focused);
});


