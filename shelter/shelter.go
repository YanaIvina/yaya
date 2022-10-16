package shelter

import "fmt"

func Here(name string) string {
	inscription := fmt.Sprintf("%v was here", name)
	return inscription
}
