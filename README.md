# Note

- レンダリング時  
  →loader が反応

- `<Form method="post">`  
  →action が反応

- `<Form method="get">`  
  →loader が反応

- `<Form action="edit" method="get">`  
  →\_.edit.tsx に遷移 + 遷移先の loader が反応  
  リクエスト url に\_edit が付与されている

- `<Form action="destroy" method="post">`  
  →destroy.tsx に遷移 + 遷移先の action が反応  
  リクエスト url に destory が付与されている

- `<Form action="sample" method="post">`  
  →sample.tsx に遷移 + 遷移先の action が反応  
  リクエスト url に sample が付与されている
