// iniciar o projeto com cd Documents\GitHub\w3aver 'air' no terminal. abrir em http://localhost:8081/

package main

import (
	"fmt"
	"html/template"
	"net/http"
)

func main() {

	fs_frontend := http.FileServer(http.Dir("frontend"))
	http.Handle("/static/", http.StripPrefix("/static/", fs_frontend))

	fs_img := http.FileServer(http.Dir("imgs"))

	http.Handle("/imgs/", http.StripPrefix("/imgs/", fs_img))

	http.HandleFunc("/", homeHandler)

	fmt.Println("Servidor rodando")
	http.ListenAndServe(":8080", nil)
}

func homeHandler(w http.ResponseWriter, r *http.Request) {

	tmpl, error := template.ParseFiles("frontend/index.html")

	if error != nil {

		http.Error(w, "Erro ao carregar a página", http.StatusInternalServerError)
		return

	}

	nome_usuario := "user"

	tmpl.Execute(w, nome_usuario)

}
