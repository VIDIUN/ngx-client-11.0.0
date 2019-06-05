/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchOperatorType } from './KalturaSearchOperatorType';
import { KalturaSearchItem } from './KalturaSearchItem';
/**
 * @record
 */
export function KalturaSearchOperatorArgs() { }
/** @type {?|undefined} */
KalturaSearchOperatorArgs.prototype.type;
/** @type {?|undefined} */
KalturaSearchOperatorArgs.prototype.items;
export class KalturaSearchOperator extends KalturaSearchItem {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.items === 'undefined')
            this.items = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSearchOperator' },
            type: { type: 'en', subTypeConstructor: KalturaSearchOperatorType, subType: 'KalturaSearchOperatorType' },
            items: { type: 'a', subTypeConstructor: KalturaSearchItem, subType: 'KalturaSearchItem' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaSearchOperator.prototype.type;
    /** @type {?} */
    KalturaSearchOperator.prototype.items;
}
typesMappingStorage['KalturaSearchOperator'] = KalturaSearchOperator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlYXJjaE9wZXJhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2VhcmNoT3BlcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7OztBQVEvRSxNQUFNLDRCQUE2QixTQUFRLGlCQUFpQjs7OztJQUt4RCxZQUFZLElBQWlDO1FBRXpDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztLQUMxRDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDN0csS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7U0FDcEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoT3BlcmF0b3JUeXBlIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoT3BlcmF0b3JUeXBlJztcbmltcG9ydCB7IEthbHR1cmFTZWFyY2hJdGVtLCBLYWx0dXJhU2VhcmNoSXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2VhcmNoT3BlcmF0b3JBcmdzICBleHRlbmRzIEthbHR1cmFTZWFyY2hJdGVtQXJncyB7XG4gICAgdHlwZT8gOiBLYWx0dXJhU2VhcmNoT3BlcmF0b3JUeXBlO1xuXHRpdGVtcz8gOiBLYWx0dXJhU2VhcmNoSXRlbVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2VhcmNoT3BlcmF0b3IgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoSXRlbSB7XG5cbiAgICB0eXBlIDogS2FsdHVyYVNlYXJjaE9wZXJhdG9yVHlwZTtcblx0aXRlbXMgOiBLYWx0dXJhU2VhcmNoSXRlbVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2VhcmNoT3BlcmF0b3JBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5pdGVtcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU2VhcmNoT3BlcmF0b3InIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VhcmNoT3BlcmF0b3JUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTZWFyY2hPcGVyYXRvclR5cGUnIH0sXG5cdFx0XHRcdGl0ZW1zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VhcmNoSXRlbSwgc3ViVHlwZSA6ICdLYWx0dXJhU2VhcmNoSXRlbScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNlYXJjaE9wZXJhdG9yJ10gPSBLYWx0dXJhU2VhcmNoT3BlcmF0b3I7Il19