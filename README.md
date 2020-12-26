# Gradivote modern
Application which lets users submit beautiful looking gradients.  
Other users can vote on these gradients.

## Models

### User
- email: String
- name: String
- password: String
- gradients: Gradient[]
- votes: Vote[]

### Gradient
- data: String
- submitted_by: User
- votes: Vote[]

### Vote
- user: User
- Gradient: Gradient
