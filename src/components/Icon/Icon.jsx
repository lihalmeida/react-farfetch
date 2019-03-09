import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as bagWhite } from 'assets/icons/bag-white.svg'
import { ReactComponent as caretDownBig } from 'assets/icons/caret-down-big.svg'
import { ReactComponent as caretDownFilled } from 'assets/icons/caret-down-filled.svg';
import { ReactComponent as caretDownFilledGray } from 'assets/icons/caret-down-filled-gray.svg'
import { ReactComponent as caretDownSmall } from 'assets/icons/caret-down-small.svg';
import { ReactComponent as caretUp } from 'assets/icons/caret-up.svg';
import { ReactComponent as check } from 'assets/icons/check.svg';
import { ReactComponent as checkout } from 'assets/icons/checkout.svg'
import { ReactComponent as checkWhite } from 'assets/icons/check-white.svg';
import { ReactComponent as close } from 'assets/icons/close.svg';
import { ReactComponent as closeWhite } from 'assets/icons/close-white.svg';
import { ReactComponent as email } from 'assets/icons/email.svg';
import { ReactComponent as facebook } from 'assets/icons/facebook.svg';
import { ReactComponent as googlePlus } from 'assets/icons/google-plus.svg';
import { ReactComponent as hamburguer } from 'assets/icons/hamburguer.svg';
import { ReactComponent as phone } from 'assets/icons/phone.svg'
import { ReactComponent as pinterest } from 'assets/icons/pinterest.svg';
import { ReactComponent as returns } from 'assets/icons/returns.svg'
import { ReactComponent as search } from 'assets/icons/search.svg';
import { ReactComponent as searchBigGray } from 'assets/icons/search-big-gray.svg'
import { ReactComponent as sort } from 'assets/icons/sort.svg';
import { ReactComponent as star } from 'assets/icons/star.svg';
import { ReactComponent as starGray } from 'assets/icons/star-gray.svg';
import { ReactComponent as starBlack } from 'assets/icons/star-black.svg';
import { ReactComponent as starRounded } from 'assets/icons/star-rounded.svg';
import { ReactComponent as tags } from 'assets/icons/tags.svg';
import { ReactComponent as thinArrowUp } from 'assets/icons/thin-arrow-up.svg';
import { ReactComponent as twitter } from 'assets/icons/twitter.svg';
import { ReactComponent as user } from 'assets/icons/user.svg';
import { ReactComponent as zoomPlus } from 'assets/icons/zoom-plus.svg';

export const ICON = {
  bagWhite: 'bagWhite',
  caretDownBig: 'caretDownBig',
  caretDownFilled: 'caretDownFilled',
  caretDownFilledGray: 'caretDownFilledGray',
  caretDownSmall: 'caretDownSmall',
  caretUp: 'caretUp',
  check: 'check',
  checkout: 'checkout',
  checkWhite: 'checkWhite',
  close: 'close',
  closeWhite: 'closeWhite',
  email: 'email',
  facebook: 'facebook',
  googlePlus: 'googlePlus',
  hamburguer: 'hamburguer',
  phone: 'phone',
  pinterest: 'pinterest',
  returns: 'returns',
  search: 'search',
  searchBigGray: 'searchBigGray',
  sort: 'sort',
  star: 'star',
  starGray: 'starGray',
  starBlack: 'starBlack',
  starRounded: 'starRounded',
  tags: 'tags',
  thinArrowUp: 'thinArrowUp',
  twitter: 'twitter',
  user: 'user',
  zoomPlus: 'zoomPlus',
};

const svgByIcon = {
  [ICON.bagWhite]: bagWhite,
  [ICON.caretDownBig]: caretDownBig,
  [ICON.caretDownFilled]: caretDownFilled,
  [ICON.caretDownFilledGray]: caretDownFilledGray,
  [ICON.caretDownSmall]: caretDownSmall,
  [ICON.caretUp]: caretUp,
  [ICON.check]: check,
  [ICON.checkout]: checkout,
  [ICON.checkWhite]: checkWhite,
  [ICON.close]: close,
  [ICON.closeWhite]: closeWhite,
  [ICON.email]: email,
  [ICON.facebook]: facebook,
  [ICON.googlePlus]: googlePlus,
  [ICON.hamburguer]: hamburguer,
  [ICON.phone]: phone,
  [ICON.pinterest]: pinterest,
  [ICON.returns]: returns,
  [ICON.search]: search,
  [ICON.searchBigGray]: searchBigGray,
  [ICON.sort]: sort,
  [ICON.star]: star,
  [ICON.starGray]: starGray,
  [ICON.starBlack]: starBlack,
  [ICON.starRounded]: starRounded,
  [ICON.tags]: tags,
  [ICON.thinArrowUp]: thinArrowUp,
  [ICON.twitter]: twitter,
  [ICON.user]: user,
  [ICON.zoomPlus]: zoomPlus,
};

export class Icon extends PureComponent {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    icon: PropTypes.oneOf(Object.values(ICON)).isRequired
  };

  static defaultProps = {
    width: 20,
    height: 20
  };

  render() {
    const { width, height, icon } = this.props;
    const Icon = svgByIcon[icon];

    return (
      <Icon width={width} height={height} />
    );
  }
}

export default Icon;
