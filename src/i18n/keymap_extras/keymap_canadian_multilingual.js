/* Copyright 2022 - Generated by convert_keymap_extras_header.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

export default {
  /*
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │ / │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 0 │ - │ = │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │ ^ │ Ç │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │ A │ S │ D │ F │ G │ H │ J │ K │ L │ ; │ È │ À │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │ Ù │ Z │ X │ C │ V │ B │ N │ M │ , │ . │ É │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  KC_GRV: { name: '\\\n/', title: 'CA_SLSH' },
  KC_1: { name: '!\n1', title: 'CA_1' },
  KC_2: { name: '@\n2', title: 'CA_2' },
  KC_3: { name: '#\n3', title: 'CA_3' },
  KC_4: { name: '$\n4', title: 'CA_4' },
  KC_5: { name: '%\n5', title: 'CA_5' },
  KC_6: { name: '?\n6', title: 'CA_6' },
  KC_7: { name: '&\n7', title: 'CA_7' },
  KC_8: { name: '*\n8', title: 'CA_8' },
  KC_9: { name: '(\n9', title: 'CA_9' },
  KC_0: { name: ')\n0', title: 'CA_0' },
  KC_MINS: { name: '_\n-', title: 'CA_MINS' },
  KC_EQL: { name: '+\n=', title: 'CA_EQL' },
  // Row 2
  KC_Q: { name: 'Q', title: 'CA_Q' },
  KC_W: { name: 'W', title: 'CA_W' },
  KC_E: { name: 'E', title: 'CA_E' },
  KC_R: { name: 'R', title: 'CA_R' },
  KC_T: { name: 'T', title: 'CA_T' },
  KC_Y: { name: 'Y', title: 'CA_Y' },
  KC_U: { name: 'U', title: 'CA_U' },
  KC_I: { name: 'I', title: 'CA_I' },
  KC_O: { name: 'O', title: 'CA_O' },
  KC_P: { name: 'P', title: 'CA_P' },
  KC_LBRC: { name: '¨\n^', title: 'CA_CIRC (dead)' },
  KC_RBRC: { name: 'Ç', title: 'CA_CCED' },
  // Row 3
  KC_A: { name: 'A', title: 'CA_A' },
  KC_S: { name: 'S', title: 'CA_S' },
  KC_D: { name: 'D', title: 'CA_D' },
  KC_F: { name: 'F', title: 'CA_F' },
  KC_G: { name: 'G', title: 'CA_G' },
  KC_H: { name: 'H', title: 'CA_H' },
  KC_J: { name: 'J', title: 'CA_J' },
  KC_K: { name: 'K', title: 'CA_K' },
  KC_L: { name: 'L', title: 'CA_L' },
  KC_SCLN: { name: ':\n;', title: 'CA_SCLN' },
  KC_QUOT: { name: 'É', title: 'CA_EGRV' },
  KC_NUHS: { name: 'À', title: 'CA_AGRV' },
  // Row 4
  KC_NUBS: { name: 'Ù', title: 'CA_UGRV' },
  KC_Z: { name: 'Z', title: 'CA_Z' },
  KC_X: { name: 'X', title: 'CA_X' },
  KC_C: { name: 'C', title: 'CA_C' },
  KC_V: { name: 'V', title: 'CA_V' },
  KC_B: { name: 'B', title: 'CA_B' },
  KC_N: { name: 'N', title: 'CA_N' },
  KC_M: { name: 'M', title: 'CA_M' },
  KC_COMM: { name: "'\n,", title: 'CA_COMM' },
  KC_DOT: { name: '"\n.', title: 'CA_DOT' },
  KC_SLSH: { name: 'É', title: 'CA_EACU' },

  /* Shifted symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │ \ │ ! │ @ │ # │ $ │ % │ ? │ & │ * │ ( │ ) │ _ │ + │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │   │   │   │   │   │   │   │   │   │   │ ¨ │   │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │   │   │   │   │   │   │   │   │   │ : │   │   │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │   │   │   │   │   │   │   │   │ ' │ " │   │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  'S(KC_GRV)': { name: '\\', title: 'CA_BSLS' },
  KC_TILD: { name: '\\', title: 'CA_BSLS' },
  'S(KC_1)': { name: '!', title: 'CA_EXLM' },
  KC_EXLM: { name: '!', title: 'CA_EXLM' },
  'S(KC_2)': { name: '@', title: 'CA_AT' },
  KC_AT: { name: '@', title: 'CA_AT' },
  'S(KC_3)': { name: '#', title: 'CA_HASH' },
  KC_HASH: { name: '#', title: 'CA_HASH' },
  'S(KC_4)': { name: '$', title: 'CA_DLR' },
  KC_DLR: { name: '$', title: 'CA_DLR' },
  'S(KC_5)': { name: '%', title: 'CA_PERC' },
  KC_PERC: { name: '%', title: 'CA_PERC' },
  'S(KC_6)': { name: '?', title: 'CA_QUES' },
  KC_CIRC: { name: '?', title: 'CA_QUES' },
  'S(KC_7)': { name: '&', title: 'CA_AMPR' },
  KC_AMPR: { name: '&', title: 'CA_AMPR' },
  'S(KC_8)': { name: '*', title: 'CA_ASTR' },
  KC_ASTR: { name: '*', title: 'CA_ASTR' },
  'S(KC_9)': { name: '(', title: 'CA_LPRN' },
  KC_LPRN: { name: '(', title: 'CA_LPRN' },
  'S(KC_0)': { name: ')', title: 'CA_RPRN' },
  KC_RPRN: { name: ')', title: 'CA_RPRN' },
  'S(KC_MINS)': { name: '_', title: 'CA_UNDS' },
  KC_UNDS: { name: '_', title: 'CA_UNDS' },
  'S(KC_EQL)': { name: '+', title: 'CA_PLUS' },
  KC_PLUS: { name: '+', title: 'CA_PLUS' },
  // Row 2
  'S(KC_LBRC)': { name: '¨', title: 'CA_DIAE (dead)' },
  KC_LCBR: { name: '¨', title: 'CA_DIAE (dead)' },
  // Row 3
  'S(KC_SCLN)': { name: ':', title: 'CA_COLN' },
  KC_COLN: { name: ':', title: 'CA_COLN' },
  // Row 4
  'S(KC_COMM)': { name: "'", title: 'CA_QUOT' },
  KC_LT: { name: "'", title: 'CA_QUOT' },
  'S(KC_DOT)': { name: '"', title: 'CA_DQUO' },
  KC_GT: { name: '"', title: 'CA_DQUO' },

  /* AltGr symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │ | │   │   │   │ ¤ │   │   │ { │ } │ [ │ ] │   │ ¬ │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │   │   │ € │   │   │   │   │   │   │   │ ` │ ~ │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │   │   │   │   │   │   │   │   │   │ ° │   │   │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │   │ « │ » │   │   │   │   │   │ < │ > │   │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  'ALGR(KC_GRV)': { name: '|', title: 'CA_PIPE' },
  'ALGR(KC_4)': { name: '¤', title: 'CA_CURR' },
  'ALGR(KC_7)': { name: '{', title: 'CA_LCBR' },
  'ALGR(KC_8)': { name: '}', title: 'CA_RCBR' },
  'ALGR(KC_9)': { name: '[', title: 'CA_LBRC' },
  'ALGR(KC_0)': { name: ']', title: 'CA_RBRC' },
  'ALGR(KC_EQL)': { name: '¬', title: 'CA_NOT' },
  // Row 2
  'ALGR(KC_E)': { name: '€', title: 'CA_EURO' },
  'ALGR(KC_LBRC)': { name: '`', title: 'CA_GRV (dead)' },
  'ALGR(KC_RBRC)': { name: '~', title: 'CA_DTIL (dead)' },
  // Row 3
  'ALGR(KC_SCLN)': { name: '°', title: 'CA_DEG' },
  // Row 4
  'ALGR(KC_Z)': { name: '«', title: 'CA_LDAQ' },
  'ALGR(KC_X)': { name: '»', title: 'CA_RDAQ' },
  'ALGR(KC_COMM)': { name: '<', title: 'CA_LABK' },
  'ALGR(KC_DOT)': { name: '>', title: 'CA_RABK' },

  /* Right Ctrl symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │   │ ¹ │ ² │ ³ │ ¼ │ ½ │ ¾ │   │   │   │   │   │ ¸ │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │ Ω │ Ł │ Œ │ ¶ │ Ŧ │ ← │ ↓ │ → │ Ø │ Þ │   │ ~ │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │ Æ │ ß │ Ð │   │ Ŋ │ Ħ │ Ĳ │ ĸ │ Ŀ │ ´ │   │   │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │   │   │   │ ¢ │ “ │ ” │ ŉ │ μ │ ― │ ˙ │   │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  'RCTL(KC_1)': { name: '¹', title: 'CA_SUP1' },
  'RCTL(KC_2)': { name: '²', title: 'CA_SUP2' },
  'RCTL(KC_3)': { name: '³', title: 'CA_SUP3' },
  'RCTL(KC_4)': { name: '¼', title: 'CA_QRTR' },
  'RCTL(KC_5)': { name: '½', title: 'CA_HALF' },
  'RCTL(KC_6)': { name: '¾', title: 'CA_TQTR' },
  'RCTL(KC_EQL)': { name: '¸', title: 'CA_CEDL (dead)' },
  // Row 2
  'RCTL(KC_Q)': { name: 'Ω', title: 'CA_OMEG' },
  'RCTL(KC_W)': { name: 'Ł', title: 'CA_LSTR' },
  'RCTL(KC_E)': { name: 'Œ', title: 'CA_OE' },
  'RCTL(KC_R)': { name: '¶', title: 'CA_PARA' },
  'RCTL(KC_T)': { name: 'Ŧ', title: 'CA_TSTR' },
  'RCTL(KC_Y)': { name: '←', title: 'CA_LARR' },
  'RCTL(KC_U)': { name: '↓', title: 'CA_DARR' },
  'RCTL(KC_I)': { name: '→', title: 'CA_RARR' },
  'RCTL(KC_O)': { name: 'Ø', title: 'CA_OSTR' },
  'RCTL(KC_P)': { name: 'Þ', title: 'CA_THRN' },
  'RCTL(KC_RBRC)': { name: '~', title: 'CA_TILD' },
  // Row 3
  'RCTL(KC_A)': { name: 'Æ', title: 'CA_AE' },
  'RCTL(KC_S)': { name: 'ß', title: 'CA_SS' },
  'RCTL(KC_D)': { name: 'Ð', title: 'CA_ETH' },
  'RCTL(KC_G)': { name: 'Ŋ', title: 'CA_ENG' },
  'RCTL(KC_H)': { name: 'Ħ', title: 'CA_HSTR' },
  'RCTL(KC_J)': { name: 'Ĳ', title: 'CA_IJ' },
  'RCTL(KC_K)': { name: 'ĸ', title: 'CA_KRA' },
  'RCTL(KC_L)': { name: 'Ŀ', title: 'CA_LMDT' },
  'RCTL(KC_SCLN)': { name: '´', title: 'CA_ACUT (dead)' },
  // Row 4
  'RCTL(KC_C)': { name: '¢', title: 'CA_CENT' },
  'RCTL(KC_V)': { name: '“', title: 'CA_LDQU' },
  'RCTL(KC_B)': { name: '”', title: 'CA_RDQU' },
  'RCTL(KC_N)': { name: 'ŉ', title: 'CA_APSN' },
  'RCTL(KC_M)': { name: 'μ', title: 'CA_MICR' },
  'RCTL(KC_COMM)': { name: '―', title: 'CA_HRZB' },
  'RCTL(KC_DOT)': { name: '˙', title: 'CA_DOTA (dead)' },

  /* Shift+Right Ctrl symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │ - │ ¡ │   │ £ │   │ ⅜ │ ⅝ │ ⅞ │ ™ │ ± │   │ ¿ │ ˛ │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │   │   │   │ ® │   │ ¥ │ ↑ │ ı │   │   │ ° │ ¯ │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │   │ § │   │ ª │   │   │   │   │   │ ˝ │ ˇ │ ˘ │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │ ¦ │   │   │ © │ ‘ │ ’ │ ♪ │ º │ × │ ÷ │   │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  'RCTL(S(KC_GRV))': { name: 'Soft hyphen', title: 'CA_SHYP (soft hyphen)' },
  'RCTL(S(KC_1))': { name: '¡', title: 'CA_IEXL' },
  'RCTL(S(KC_3))': { name: '£', title: 'CA_PND' },
  'RCTL(S(KC_5))': { name: '⅜', title: 'CA_TEIG' },
  'RCTL(S(KC_6))': { name: '⅝', title: 'CA_FEIG' },
  'RCTL(S(KC_7))': { name: '⅞', title: 'CA_SEIG' },
  'RCTL(S(KC_8))': { name: '™', title: 'CA_TM' },
  'RCTL(S(KC_9))': { name: '±', title: 'CA_PLMN' },
  'RCTL(S(KC_MINS))': { name: '¿', title: 'CA_IQUE' },
  'RCTL(S(KC_EQL))': { name: '˛', title: 'CA_OGON (dead)' },
  // Row 2
  'RCTL(S(KC_R))': { name: '®', title: 'CA_REGD' },
  'RCTL(S(KC_Y))': { name: '¥', title: 'CA_YEN' },
  'RCTL(S(KC_U))': { name: '↑', title: 'CA_UARR' },
  'RCTL(S(KC_I))': { name: 'ı', title: 'CA_DLSI' },
  'RCTL(S(KC_LBRC))': { name: '°', title: 'CA_RNGA (dead)' },
  'RCTL(S(KC_RBRC))': { name: '¯', title: 'CA_MACR (dead)' },
  // Row 3
  'RCTL(S(KC_S))': { name: '§', title: 'CA_SECT' },
  'RCTL(S(KC_F))': { name: 'ª', title: 'CA_FORD' },
  'RCTL(S(KC_SCLN))': { name: '˝', title: 'CA_DACU (dead)' },
  'RCTL(S(KC_QUOT))': { name: 'ˇ', title: 'CA_CARN (dead)' },
  'RCTL(S(KC_NUHS))': { name: '˘', title: 'CA_BREV (dead)' },
  // Row 4
  'RCTL(S(KC_NUBS))': { name: '¦', title: 'CA_BRKP' },
  'RCTL(S(KC_C))': { name: '©', title: 'CA_COPY' },
  'RCTL(S(KC_V))': { name: '‘', title: 'CA_LSQU' },
  'RCTL(S(KC_B))': { name: '’', title: 'CA_RSQU' },
  'RCTL(S(KC_N))': { name: '♪', title: 'CA_ENOT' },
  'RCTL(S(KC_M))': { name: 'º', title: 'CA_MORD' },
  'RCTL(S(KC_COMM))': { name: '×', title: 'CA_MUL' },
  'RCTL(S(KC_DOT))': { name: '÷', title: 'CA_DIV' },

  /* Other keys */
  KC_BSLS: { name: 'À', title: '' },
  'S(KC_BSLS)': { name: 'À', title: '' },
  KC_RCBR: { name: 'Ç', title: 'S(CA_CCED) (capital Ç)' },
  KC_PIPE: { name: 'À', title: 'CA_AGRV (capital À)' },
  KC_QUES: { name: 'É', title: 'S(CA_EACU) (capital É)' },
  KC_DQUO: { name: 'É', title: 'S(CA_EGRV) (capital É)' },

  SC_LSPO: { name: 'LS / (', title: 'Left Shift when held, ( when tapped' },
  SC_RSPC: { name: 'RS / )', title: 'Right Shift when held, ) when tapped' },
  SC_LCPO: { name: 'LC / (', title: 'Left Control when held, ( when tapped' },
  SC_RCPC: { name: 'RC / )', title: 'Right Control when held, ) when tapped' },
  SC_LAPO: { name: 'LA / (', title: 'Left Alt when held, ( when tapped' },
  SC_RAPC: { name: 'RA / )', title: 'Right Alt when held, ) when tapped' },

  QK_GESC: {
    name: '//\\\nEsc',
    title: 'Esc normally, but / when GUI is active or \\ when Shift is active'
  }
};