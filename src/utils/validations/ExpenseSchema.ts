import * as yup from "yup";

export const ExpenseSchema = yup.object({
    valor: yup
        .number()
        .typeError('O valor deve ser um número')
        .required('O campo valor é obrigatório.'),
    categoria: yup
        .string()
        .required('O campo categoria é obrigatório.'),
    descricao: yup
        .string()
        .notRequired(),
    dateFormated: yup
        .date()
        .typeError('O campo data deve ser uma data válida exemplo: dd/mm/yyyy.')
        .required('O campo data é obrigatório.')
})