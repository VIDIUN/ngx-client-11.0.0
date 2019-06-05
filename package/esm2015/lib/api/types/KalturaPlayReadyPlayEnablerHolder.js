/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlayReadyPlayEnablerType } from './KalturaPlayReadyPlayEnablerType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaPlayReadyPlayEnablerHolderArgs() { }
/** @type {?|undefined} */
KalturaPlayReadyPlayEnablerHolderArgs.prototype.type;
export class KalturaPlayReadyPlayEnablerHolder extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlayReadyPlayEnablerHolder' },
            type: { type: 'es', subTypeConstructor: KalturaPlayReadyPlayEnablerType, subType: 'KalturaPlayReadyPlayEnablerType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPlayReadyPlayEnablerHolder.prototype.type;
}
typesMappingStorage['KalturaPlayReadyPlayEnablerHolder'] = KalturaPlayReadyPlayEnablerHolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlSZWFkeVBsYXlFbmFibGVySG9sZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUGxheVJlYWR5UGxheUVuYWJsZXJIb2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7QUFPbEYsTUFBTSx3Q0FBeUMsU0FBUSxpQkFBaUI7Ozs7SUFJcEUsWUFBWSxJQUE2QztRQUVyRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDdEYsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywrQkFBK0IsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7U0FDaEgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLG1DQUFtQyxDQUFDLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlSZWFkeVBsYXlFbmFibGVyVHlwZSB9IGZyb20gJy4vS2FsdHVyYVBsYXlSZWFkeVBsYXlFbmFibGVyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBsYXlSZWFkeVBsYXlFbmFibGVySG9sZGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHR5cGU/IDogS2FsdHVyYVBsYXlSZWFkeVBsYXlFbmFibGVyVHlwZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVBsYXlSZWFkeVBsYXlFbmFibGVySG9sZGVyIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgdHlwZSA6IEthbHR1cmFQbGF5UmVhZHlQbGF5RW5hYmxlclR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQbGF5UmVhZHlQbGF5RW5hYmxlckhvbGRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGxheVJlYWR5UGxheUVuYWJsZXJIb2xkZXInIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheVJlYWR5UGxheUVuYWJsZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFQbGF5UmVhZHlQbGF5RW5hYmxlclR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQbGF5UmVhZHlQbGF5RW5hYmxlckhvbGRlciddID0gS2FsdHVyYVBsYXlSZWFkeVBsYXlFbmFibGVySG9sZGVyOyJdfQ==