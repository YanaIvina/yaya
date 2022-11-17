package main

import (
	"fmt"
	"net/http"

	"github.com/YanaIvina/yaya/shelter"
)

func main() {

	inscription := shelter.Here("Max")

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, inscription)
	})
	http.ListenAndServe(":80", nil)
}

/* go mod init shelter
go get github.com/YanaIvina/yaya/shelter
go build
go run main.go */
