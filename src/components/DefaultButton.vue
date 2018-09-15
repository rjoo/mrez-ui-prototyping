<template>
    <button 
        :style="styles" 
        @click="handleClick">
        <!-- @slot Use this slot to place the button content -->
        <slot />
    </button>
</template>


<script>
    import sizeMixin from './sizeMixin';
    export default {
        name: 'DefaultButton',
        mixins: [sizeMixin],
        props: {
            /**
             * Sets the button font color
             */
            color: {
                type: String,
                default: 'black'
            },
            /** Sets background color of the button
             * @since 1.2.0
             */
            background: {
                type: String,
                default: 'white'
            }
        },
        computed: {
            styles() {
                return {
                    'font-size': this.size,
                    color: this.color,
                    background: this.background
                };
            }
        },
        methods: {
            /** Triggered when button is clicked
             * @event click
             * @type {Event}
             */
            /** Event for Alligator's example
             * @event gator
             * @type {Event}
             */
            handleClick(e) {
                this.$emit('click', e);
                this.$emit('gator', e);
            }
        }
    };
</script>


<docs>
This button is amazing, use it responsibly.

## Examples

Orange button:

```jsx
<DefaultButton color="orange">Push Me</DefaultButton>
```

Ugly button with pink font and blue background:

```jsx
<DefaultButton color="pink" background="blue">
  Ugly button
</DefaultButton>
```

Button containing custom tags:

```jsx
<DefaultButton>
  Text with <b>bold</b>
</DefaultButton>
```
</docs>
