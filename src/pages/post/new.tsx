import { ChangeEvent, FormEvent, useCallback, useReducer } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import styles from '../../styles/New.module.css';

import { sendArticle } from '../../services/api';

import PageHead from '../../components/PageHead';
import InputGroup from '../../components/InputGroup';
import PencilIcon from '../../components/PencilIcon';

type ReducerState = {
  title: string,
  author: string,
  authorEmail: string,
  article: string,
  imageUrl: string
}

const initialState: ReducerState = {
  title: '',
  author: '',
  authorEmail: '',
  article: '',
  imageUrl: ''
};

type ReducerActionType = keyof typeof initialState | 'reset';

type ReducerAction = {
  type: ReducerActionType 
  value?: string;
}
type Reducer = (state: ReducerState, action: ReducerAction) => ReducerState;

const reducer: Reducer = (state, action) => {
  const { type, value } = action;

  const actions = {
    title: () => ({ ...state, title: value }) as ReducerState,
    author: () => ({ ...state, author: value }) as ReducerState,
    authorEmail: () => ({ ...state, authorEmail: value }) as ReducerState,
    article: () => ({ ...state, article: value }) as ReducerState,
    imageUrl: () => ({ ...state, imageUrl: value }) as ReducerState,
    reset: () => initialState
  }

  return actions[type]();
};

const NewPostPage = () => {
  const router = useRouter();
  const [state, dispatch] = useReducer<Reducer>(reducer, initialState);

  const handleDispatch = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: ReducerActionType | 'reset') => {
    if (type === 'reset') {
      dispatch({ type: 'reset' });
    }

    dispatch({ type, value: e.target.value })
  }, [dispatch]) ;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await sendArticle({ ...state, date: new Date().toISOString() });
    dispatch({ type: 'reset' });

    if (!response) return;

    router.push(`/post/${response.id}`);
  }

  return (
    <PageHead title="Blog Coderockr | New post">
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.cover}>
            <Image
              src="https://source.unsplash.com/640x640/?trees"
              alt="A tree image"
              layout="fill"
              placeholder="blur"
              blurDataURL="https://source.unsplash.com/640x640/?trees"
            />
          </div>
          <span className={styles.heading}>New Post</span>
          <form onSubmit={handleSubmit} className={styles.form}>
            <InputGroup
              onChange={(e) => handleDispatch(e, 'title')}
              value={state.title}
              type="text"
              label="Title"
              placeholder="Fill the title"
            />
            <InputGroup
              onChange={(e) => handleDispatch(e, 'author')}
              value={state.author}
              type="text"
              label="Author"
              placeholder="Fill the author name"
            />
            <InputGroup
              onChange={(e) => handleDispatch(e, 'authorEmail')}
              value={state.authorEmail}
              type="email"
              label="Author E-mail"
              placeholder="Fill the author e-mail"
            />
            <InputGroup
              onChange={(e) => handleDispatch(e, 'imageUrl')}
              value={state.imageUrl}
              type="url"
              label="Image URL"
              placeholder="Fill the image URL"
            />
            <InputGroup
              onChange={(e) => handleDispatch(e, 'article')}
              value={state.article}
              type="textarea"
              label="Post"
              placeholder="Post..."
            />
            <button className={styles.submit}>
              <PencilIcon />
              Create Post
            </button>
          </form>
        </div>
      </div>
    </PageHead>
  );
}

export default NewPostPage;
