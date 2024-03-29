## In Class Activity 4
### 1. Equivalence Partitioning and Boundary Value Analysis:

**Equivalence Partitioning:**
- Inputs can be divided into equivalence classes such as:
    - Valid lock quantity: 
    - Valid stock quantity: 
    - Valid barrel quantity: 

**Boundary Value Analysis:**
- Test cases focus on boundary values of input ranges:
    - For lock quantity: 
    - For stock quantity: 
    - For barrel quantity: 

### 2. DD-Path Graph:

Refer to the Slides of Week 6: Drawing the DD-Path graph requires identifying decision nodes and directed edges representing the flow of control. 

### 3. Finding All Paths:

Refer to the Slides of Week 6: Once you have the DD-Path graph, you can trace all possible paths from the entry point to the exit point. 

### 4. Decision Table and Test Cases:

Based on the sales limit condition, you create a decision table with inputs (lock quantity, stock quantity, barrel quantity) and outputs (whether sales exceed limits or not). Then, derive test cases covering all combinations of input conditions.

#### Decision Table:

| Lock Quantity | Stock Quantity | Barrel Quantity | Sales Exceed Limits? |
|---------------|----------------|-----------------|--------------|
|          |           |            |             |
|            |           |          |             |
|         |             |           |             |
|         |           |             |             |
|            |            |           |             |
|           |           |             |             |
|         |             |              |            |
|            |            |              |            |

Test cases should cover each combination of inputs that results in a different output.