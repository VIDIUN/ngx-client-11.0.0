/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFeedItemInfo } from './KalturaFeedItemInfo';
import { KalturaDropFolder } from './KalturaDropFolder';
/**
 * @record
 */
export function KalturaFeedDropFolderArgs() { }
/** @type {?|undefined} */
KalturaFeedDropFolderArgs.prototype.itemHandlingLimit;
/** @type {?|undefined} */
KalturaFeedDropFolderArgs.prototype.feedItemInfo;
export class KalturaFeedDropFolder extends KalturaDropFolder {
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
            objectType: { type: 'c', default: 'KalturaFeedDropFolder' },
            itemHandlingLimit: { type: 'n' },
            feedItemInfo: { type: 'o', subTypeConstructor: KalturaFeedItemInfo, subType: 'KalturaFeedItemInfo' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFeedDropFolder.prototype.itemHandlingLimit;
    /** @type {?} */
    KalturaFeedDropFolder.prototype.feedItemInfo;
}
typesMappingStorage['KalturaFeedDropFolder'] = KalturaFeedDropFolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZlZWREcm9wRm9sZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRmVlZERyb3BGb2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7OztBQVEvRSxNQUFNLDRCQUE2QixTQUFRLGlCQUFpQjs7OztJQUt4RCxZQUFZLElBQWlDO1FBRXpDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRSxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7U0FDL0YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmVlZEl0ZW1JbmZvIH0gZnJvbSAnLi9LYWx0dXJhRmVlZEl0ZW1JbmZvJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyLCBLYWx0dXJhRHJvcEZvbGRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmVlZERyb3BGb2xkZXJBcmdzICBleHRlbmRzIEthbHR1cmFEcm9wRm9sZGVyQXJncyB7XG4gICAgaXRlbUhhbmRsaW5nTGltaXQ/IDogbnVtYmVyO1xuXHRmZWVkSXRlbUluZm8/IDogS2FsdHVyYUZlZWRJdGVtSW5mbztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZlZWREcm9wRm9sZGVyIGV4dGVuZHMgS2FsdHVyYURyb3BGb2xkZXIge1xuXG4gICAgaXRlbUhhbmRsaW5nTGltaXQgOiBudW1iZXI7XG5cdGZlZWRJdGVtSW5mbyA6IEthbHR1cmFGZWVkSXRlbUluZm87XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGZWVkRHJvcEZvbGRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmVlZERyb3BGb2xkZXInIH0sXG5cdFx0XHRcdGl0ZW1IYW5kbGluZ0xpbWl0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZlZWRJdGVtSW5mbyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZlZWRJdGVtSW5mbywgc3ViVHlwZSA6ICdLYWx0dXJhRmVlZEl0ZW1JbmZvJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRmVlZERyb3BGb2xkZXInXSA9IEthbHR1cmFGZWVkRHJvcEZvbGRlcjsiXX0=