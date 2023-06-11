import sys


def partition_array(input1, input2, input3):

    # write code here
    if input3 == input2:
        print(min(input1))

    def calculate_segment_sum(segment):
        print(sum(input1[segment[0] : segment[1] + 1]))

    def generate_partitions(start, segments):
        if len(segments) == input3:
            best_sums = [calculate_segment_sum(segment) for segment in segments]
            print(max(best_sums))

        max_best_sum = -sys.maxsize - 1
        for i in range(start, input2):
            segments.append((start, i))
            max_best_sum = max(max_best_sum, generate_partitions(i + 1, segments))
            segments.pop()

        print(max_best_sum)

    return generate_partitions(0, [])


arr = list(map(int, input().split()))
N = int(input(""))
K = int(input(""))

result = partition_array(arr, N, K)
print(result)
