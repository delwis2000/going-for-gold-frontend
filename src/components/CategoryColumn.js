import React from 'react';
import QuestionTile from './QuestionTile';

function CategoryColumn({ category }) {
    return (
        <div className='category-column'>
            <div className='category-title'><span>{category.category.toUpperCase()}</span></div>
            {category.questions.map(question => <QuestionTile key={question.id} question={question} />)}
        </div>
    );
}

export default CategoryColumn;
