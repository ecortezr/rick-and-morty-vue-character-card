import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CharacterCard from '../CharacterCard.vue'
import type { ICharacter } from '@/types';
import mockCharacter from '@/components/__tests__/mockCharacter.json';

const characterObject = JSON.parse(JSON.stringify(mockCharacter)) as ICharacter;

describe('CharacterCard', () => {

  const props = {
    characterData: characterObject
  };
  const propsFull = {
    ...props,
    isFavorite: true,
    bgColor: '#FFF',
    maxWidth: '326px'
  };

  let wrapper = mount(CharacterCard, { props });

  it('renders properly', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.text()).toContain('Last known location');
    expect(wrapper.text()).toContain('First seen in');
    expect(wrapper.text()).toMatchSnapshot();
  });

  it('render with right properties', () => {
    const wrapper = mount(CharacterCard, { props: propsFull });

    expect(wrapper.props()).toEqual(propsFull);
  });

  it('render with properly style', () => {
    const wrapperCssProps = {
      display: 'flex',
      position: 'relative',
      'min-width': '326px',
      'max-height': '140px',
      margin: '5px'
    };
    type Keys = keyof typeof wrapperCssProps;

    const computedStyle = getComputedStyle(wrapper.element);

    expect(wrapper.classes()).toContain('card');

    Object.keys(wrapperCssProps).forEach((key: string) => {
      expect(computedStyle[key as keyof CSSStyleDeclaration])
        .toBe(wrapperCssProps[key as Keys]);
    });
  });

  it('render with properly style when set optional props', () => {
    const wrapper = mount(CharacterCard, { props: propsFull });
    const wrapperCssProps = {
      display: 'flex',
      position: 'relative',
      'min-width': '326px',
      'max-height': '140px',
      margin: '5px',
      'max-width': '326px'
    };
    type Keys = keyof typeof wrapperCssProps;

    const computedStyle = getComputedStyle(wrapper.element);

    expect(wrapper.classes()).toContain('card');

    Object.keys(wrapperCssProps).forEach((key: string) => {
      expect(computedStyle[key as keyof CSSStyleDeclaration])
        .toBe(wrapperCssProps[key as Keys]);
    });
  });

  describe('CharacterCard Elements', () => {

    it('render content with properly style', () => {
      const contentElem = wrapper.find('#card-content');
      const contentCssProps = {
        flex: '3 1 0%',
        position: 'relative',
        padding: '0.5rem',
        display: 'flex',
        'flex-direction': 'column',
        color: 'rgb(0, 0, 0)',
        'border-top-right-radius': '10px',
        'border-bottom-right-radius': '10px',
        border: '1px solid #e0e0e0',
        'font-size': '10px'
      };
      type Keys = keyof typeof contentCssProps;

      const computedStyle = getComputedStyle(contentElem.element);

      expect(contentElem.classes()).toContain('card__content');

      Object.keys(contentCssProps).forEach((key: string) => {
        expect(computedStyle[key as keyof CSSStyleDeclaration])
          .toBe(contentCssProps[key as Keys]);
      });
    });

    it('render content with properly style when set optional props', () => {
    const wrapper = mount(CharacterCard, { props: propsFull });
    const contentElem = wrapper.find('#card-content');
      const contentCssProps = {
        flex: '3 1 0%',
        position: 'relative',
        padding: '0.5rem',
        display: 'flex',
        'flex-direction': 'column',
        color: 'rgb(0, 0, 0)',
        'border-top-right-radius': '10px',
        'border-bottom-right-radius': '10px',
        border: '1px solid #e0e0e0',
        'font-size': '10px',
        'background-color': 'rgb(255, 255, 255)'
      };
      type Keys = keyof typeof contentCssProps;

      const computedStyle = getComputedStyle(contentElem.element);

      expect(contentElem.classes()).toContain('card__content');

      Object.keys(contentCssProps).forEach((key: string) => {
        expect(computedStyle[key as keyof CSSStyleDeclaration])
          .toBe(contentCssProps[key as Keys]);
      });
    });

    describe('Image Element', () => {

      const imgElem = wrapper.find('img');
      const imgCssProps = {
        width: '140px',
        height: '140px',
        'border-top-left-radius': '10px',
        'border-bottom-left-radius': '10px'
      };
      type Keys = keyof typeof imgCssProps;

      it('img element exist', () => {
        expect(imgElem.exists()).toBe(true);
      });

      it('render image properly', () => {
        expect(imgElem.element.src).toEqual(characterObject.image);
      });

      it('render image style properly', () => {
        const computedStyle = getComputedStyle(imgElem.element);

        expect(imgElem.classes()).toContain('card__image');

        Object.keys(imgCssProps).forEach((key: string) => {
          expect(computedStyle[key as keyof CSSStyleDeclaration])
            .toBe(imgCssProps[key as Keys]);
        });
      });
    });

    describe('Favorite Element', () => {

      describe('Favorite wrapper', () => {

        const wrapperElem = wrapper.find('#favorite-icon-wrapper');
        const wrapperCssProps = {
          width: '30px',
          height: '30px',
          left: '101px',
          top: '105px',
          position: 'absolute',
          background: 'rgb(242, 242, 242)',
          'border-radius': '9999px'
        };
        type Keys = keyof typeof wrapperCssProps;

        it('wrapper element exist', () => {
          expect(wrapperElem.exists()).toBe(true);
        });

        it('wrapper element is render properly', () => {
          const computedStyle = getComputedStyle(wrapperElem.element);

          expect(wrapperElem.classes()).toContain('card__favorite');
          Object.keys(wrapperCssProps).forEach((key: string) => {
            expect(computedStyle[key as keyof CSSStyleDeclaration])
              .toBe(wrapperCssProps[key as Keys]);
          });
        });
      });

      describe('Favorite container', () => {

        const containerElem = wrapper.find('#favorite-icon-container');
        const containerCssProps = {
          width: '18px',
          height: '18px',
          left: '107px',
          top: '111px',
          position: 'absolute'
        };
        type Keys = keyof typeof containerCssProps;

        it('container element exist', () => {
          expect(containerElem.exists()).toBe(true);
        });

        it('container element is render properly', () => {
          const computedStyle = getComputedStyle(containerElem.element);

          expect(containerElem.classes()).toContain('card__star-container');
          Object.keys(containerCssProps).forEach((key: string) => {
            expect(computedStyle[key as keyof CSSStyleDeclaration])
              .toBe(containerCssProps[key as Keys]);
          });
        });

        it('render favorite icon off', () => {
          const iconElem = wrapper.find('#favorite-icon-off');

          expect(iconElem.exists()).toBe(true);
        });

        it('render favorite icon on', () => {
          wrapper = mount(CharacterCard, { props: propsFull });

          const iconElem = wrapper.find('#favorite-icon-on');

          expect(iconElem.exists()).toBe(true);
        });
      });
    });

    describe('Card Content', () => {

      const contentElem = wrapper.find('#card-content');
      const contentCssProps = {
        flex: '3 1 0%',
        position: 'relative',
        padding: '0.5rem',
        display: 'flex',
        'flex-direction': 'column',
        color: 'rgb(0, 0, 0)',
        'border-top-right-radius': '10px',
        'border-bottom-right-radius': '10px',
        border: '1px solid #e0e0e0',
        'font-size': '10px'
      };
      type Keys = keyof typeof contentCssProps;

      it('card content exist', () => {
        expect(contentElem.exists()).toBe(true);
      });

      it('card content style properly', () => {
        const computedStyle = getComputedStyle(contentElem.element);

        expect(contentElem.classes()).toContain('card__content');

        Object.keys(contentCssProps).forEach((key: string) => {
          expect(computedStyle[key as keyof CSSStyleDeclaration])
            .toBe(contentCssProps[key as Keys]);
        });
      });
    });

    describe('Card Content Section', () => {

      const sections = wrapper.findAll('[data-test="card-section"]');
      expect(sections).toHaveLength(3);

      const contentElem = sections[1];
      const contentCssProps = {
        flex: '1 1 0%',
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
      };
      type Keys = keyof typeof contentCssProps;

      it('card content section style properly', () => {
        const computedStyle = getComputedStyle(contentElem.element);

        expect(contentElem.classes()).toContain('card-content__section');

        Object.keys(contentCssProps).forEach((key: string) => {
          expect(computedStyle[key as keyof CSSStyleDeclaration])
            .toBe(contentCssProps[key as Keys]);
        });
      });
    });

    describe('Status Indicator Element', () => {

      const statusElem = wrapper.find('#card-status');
      const statusCssProps = {
        height: '0.5rem',
        width: '0.5rem',
        'margin-right': '0.375rem',
        'border-radius': '50%'
      };
      type Keys = keyof typeof statusCssProps;

      it('status element exist', () => {
        expect(statusElem.exists()).toBe(true);
      });

      it('render status indicator properly', () => {
        const computedStyle = getComputedStyle(statusElem.element);

        expect(statusElem.classes()).toContain('card__status');
        expect(statusElem.classes()).toContain('card__status--alive');

        Object.keys(statusCssProps).forEach((key: string) => {
          expect(computedStyle[key as keyof CSSStyleDeclaration])
            .toBe(statusCssProps[key as Keys]);
        });
      });
    });

    describe('Status & Species Label Element', () => {

      const statusElem = wrapper.find('#card-status-species');
      const statusCssProps = {
        color: 'rgb(79, 79, 79)',
        'font-size': '10px'
      };
      type Keys = keyof typeof statusCssProps;

      it('status-species element exist', () => {
        expect(statusElem.exists()).toBe(true);
      });

      it('render status-species properly', () => {
        expect(statusElem.text()).toContain(`${characterObject.status} - ${characterObject.species}`);
      });

      it('render status-species style properly', () => {
        const computedStyle = getComputedStyle(statusElem.element);

        expect(statusElem.classes()).toContain('card__status-species');

        Object.keys(statusCssProps).forEach((key: string) => {
          expect(computedStyle[key as keyof CSSStyleDeclaration])
            .toBe(statusCssProps[key as Keys]);
        });
      });
    });

    describe('Character Name Element', () => {

      const nameElem = wrapper.find('#card-name');
      const nameCssProps = {
        'font-size': '16px'
      };
      type Keys = keyof typeof nameCssProps;

      it('name element exist', () => {
        expect(nameElem.exists()).toBe(true);
      });

      it('render name properly', () => {
        expect(nameElem.text()).toContain(characterObject.name);
      });

      it('render name style properly', () => {
        const computedStyle = getComputedStyle(nameElem.element);

        expect(nameElem.classes()).toContain('card__character-name');

        Object.keys(nameCssProps).forEach((key: string) => {
          expect(computedStyle[key as keyof CSSStyleDeclaration])
            .toBe(nameCssProps[key as Keys]);
        });
      });
    });

    describe('Location Label', () => {

      const labelElem = wrapper.find('[data-test="location-label"]');
      const labelCssProps = {
        color: 'rgb(130, 130, 130)'
      };
      type Keys = keyof typeof labelCssProps;

      it('first seen label exist', () => {
        expect(labelElem.exists()).toBe(true);
      });

      it('render first seen label properly', () => {
        expect(labelElem.text()).toContain('Last known location:');
      });

      it('render first seen label style properly', () => {
        const computedStyle = getComputedStyle(labelElem.element);

        expect(labelElem.classes()).toContain('card__label');

        Object.keys(labelCssProps).forEach((key: string) => {
          expect(computedStyle[key as keyof CSSStyleDeclaration])
            .toBe(labelCssProps[key as Keys]);
        });
      });
    });

    describe('Location Name Element', () => {

      const locationElem = wrapper.find('#card-location-value');
      const locationCssProps = {
        'font-size': '12px'
      };
      type Keys = keyof typeof locationCssProps;

      it('location element exist', () => {
        expect(locationElem.exists()).toBe(true);
      });

      it('render location properly', () => {
        expect(locationElem.text()).toContain(characterObject.locationName);
      });

      it('render location style properly', () => {
        const computedStyle = getComputedStyle(locationElem.element);

        expect(locationElem.classes()).toContain('card__field');

        Object.keys(locationCssProps).forEach((key: string) => {
          expect(computedStyle[key as keyof CSSStyleDeclaration])
            .toBe(locationCssProps[key as Keys]);
        });
      });
    });

    describe('First Seen Label', () => {

      const labelElem = wrapper.find('[data-test="first-seen-label"]');
      const labelCssProps = {
        color: 'rgb(130, 130, 130)'
      };
      type Keys = keyof typeof labelCssProps;

      it('first seen label exist', () => {
        expect(labelElem.exists()).toBe(true);
      });

      it('render first seen label properly', () => {
        expect(labelElem.text()).toContain('First seen in:');
      });

      it('render first seen label style properly', () => {
        const computedStyle = getComputedStyle(labelElem.element);

        expect(labelElem.classes()).toContain('card__label');

        Object.keys(labelCssProps).forEach((key: string) => {
          expect(computedStyle[key as keyof CSSStyleDeclaration])
            .toBe(labelCssProps[key as Keys]);
        });
      });
    });

    describe('First Seen Element', () => {

      const episodeElem = wrapper.find('#card-episode');
      const locationCssProps = {
        'font-size': '12px'
      };
      type Keys = keyof typeof locationCssProps;

      it('first seen element exist', () => {
        expect(episodeElem.exists()).toBe(true);
      });

      it('render first seen element properly', () => {
        expect(episodeElem.text()).toContain(characterObject.firstEpisodeName);
      });

      it('render first seen element style properly', () => {
        const computedStyle = getComputedStyle(episodeElem.element);

        expect(episodeElem.classes()).toContain('card__field');

        Object.keys(locationCssProps).forEach((key: string) => {
          expect(computedStyle[key as keyof CSSStyleDeclaration])
            .toBe(locationCssProps[key as Keys]);
        });
      });
    });
  });
});
