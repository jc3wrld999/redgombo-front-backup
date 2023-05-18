<template>
  <div class="row">
    <div class="col-md-12">
      <card>
        <template slot="header">
          <h4 class="card-title">제목~~</h4>
          <p class="card-category">
            카테고리
          </p>
        </template>
        <div class="content">
          <article>

<p data-ke-size="size16">AND &amp; 둘 다 만족하는 경우</p>
<pre id="code_1682379657926" class="python" data-ke-language="python" data-ke-type="codeblock"><code>     plaintext
   0   1
 ---------
k  0 | 0 | 0 |
e    |---+---|
y  1 | 0 | 1 |
 ---------

   0   1
 ---------
0 | P | 0 |
 |---+---|
1 | P | P |
 ---------</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">OR | 둘 중 하나 만족하는 경우&nbsp;</p>
<pre id="code_1682379734633" class="python" data-ke-language="python" data-ke-type="codeblock"><code>     plaintext
   0   1
 ---------
k  0 | 0 | 1 |
e    |---+---|
y  1 | 1 | 1 |
 ---------

   0   1
 ---------
0 | P | P |
 |---+---|
1 | 1 | P |
 ---------</code></pre>
<p data-ke-size="size16">XOR ^ 둘 중 하나만 만족할 경우</p>
<pre id="code_1682380377100" class="python" data-ke-language="python" data-ke-type="codeblock"><code>     plaintext
   0   1
 ---------
k  0 | 0 | 1 |
e    |---+---|
y  1 | 1 | 0 |
 ---------

   0   1
 ---------
0 | P | P |
 |---+---|
1 | 1 | 0 |
 ---------</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">Set</p>
<p data-ke-size="size16">7번째에 1을 세팅한다.</p>
<pre id="code_1682381569057" class="python" data-ke-language="python" data-ke-type="codeblock"><code># 1000000
#  101101
# 1101101
x = (1 &lt;&lt; 6) | x</code></pre>
<p data-ke-size="size16">7번째 자리를 다시 복원한다.</p>
<pre id="code_1682381731945" class="python" data-ke-language="python" data-ke-type="codeblock"><code># 10111111
#  1101101
#   101101
x = ~(1 &lt;&lt; 6) &amp; x</code></pre>
<p data-ke-size="size16">4번째 자리를 토글한다.</p>
<pre id="code_1682381865002" class="python" data-ke-language="python" data-ke-type="codeblock"><code>#   1000
# 101101
# 100101
x = (1 &lt;&lt; 3) ^ x</code></pre>
<p data-ke-size="size16">처음 나오는 1 이후의 0을 1로 변환</p>
<pre id="code_1682382137110" class="python" data-ke-language="python" data-ke-type="codeblock"><code># 1100111
# 1101000
# 1101111
x = (x - 1) | x</code></pre>
<p data-ke-size="size16">최하위 1비트 추출</p>
<pre id="code_1682387117421" class="python" data-ke-language="python" data-ke-type="codeblock"><code>#  1101000       1101000
# 10010111 + 1 = 10011000
-x = (~x) + 1</code></pre>
<p data-ke-size="size16">AND 연산을 이용하여 알고싶은 비트를 마스킹하여 확인하는 용도를 쓸 수 있다.</p>
<p data-ke-size="size16">&nbsp;</p>
<pre id="code_1682387512770" class="maxima" style="background-color: #f8f8f8; color: #383a42; text-align: start;" data-ke-language="python" data-ke-type="codeblock"><code>const binaryData = 0b011010;
const isPos2Set = (binaryData &amp; 0b10) &gt; 0;</code></pre>
<pre id="code_1682387874673" class="maxima" style="background-color: #f8f8f8; color: #383a42; text-align: start;" data-ke-language="python" data-ke-type="codeblock"><code># 2번째 비트 마스킹 확인
counter &amp; 0b10
# 결과가 0이 아니면 카운터의 j번째 비트가 설정됨을 의미
counter &amp; (1&lt;&lt;j)</code></pre>
<p data-ke-size="size16">M의 1인 비트를 a, b에 마스킹</p>
<pre id="code_1682387660781" class="python" data-ke-language="python" data-ke-type="codeblock"><code>#
A = (B &amp; M) | (A &amp; ~M)</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">Swap</p>
<p><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdFSMoW%2Fbtsb6ZjgOOI%2F9MRWkoenQ1YmczvEZ4mk6k%2Fimg.png"/></p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<h2 data-ke-size="size26">Ex1) tic-tac-toe 게임</h2>
<p data-ke-size="size16">or는 없는 칸을 찾고 and는 정답에 맞는지를 확인할 수 있음</p>
<pre id="code_1682189230165" class="python" data-ke-language="python" data-ke-type="codeblock"><code>import random

goal = [0b111000000, 0b000111000, 0b000000111, 0b100100100, 0b010010010, 0b001001001, 0b100010001, 0b001010100]

def check(player):
for mask in goal:
    if player &amp; mask == mask:
        return True
return False

def play(p1, p2):
if check(p2):
    print([bin(p1), bin(p2)])
    print('O나 X가 3개 나열되어있음')
    return
# X칸 확인
board = p1 | p2

if board == 0b111111111:
    print([bin(p1), bin(p2)])
    print('무승부')
    return

# X칸에 둠
w = [i for i in range(9) if (board &amp; (1 &lt;&lt; i)) == 0]

r = random.choice(w)
play(p2, p1 | (1 &lt;&lt; r))
play(0, 0)</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">Reference</p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li><a href="http://krako.chez.com/nouveau/spy/cs013.htm" target="_blank" rel="noopener">_</a></li>
</ul>
</article>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
