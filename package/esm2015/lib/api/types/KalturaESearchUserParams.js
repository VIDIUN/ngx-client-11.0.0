/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchUserOperator } from './KalturaESearchUserOperator';
import { KalturaESearchParams } from './KalturaESearchParams';
/**
 * @record
 */
export function KalturaESearchUserParamsArgs() { }
/** @type {?|undefined} */
KalturaESearchUserParamsArgs.prototype.searchOperator;
export class KalturaESearchUserParams extends KalturaESearchParams {
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
            objectType: { type: 'c', default: 'KalturaESearchUserParams' },
            searchOperator: { type: 'o', subTypeConstructor: KalturaESearchUserOperator, subType: 'KalturaESearchUserOperator' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchUserParams.prototype.searchOperator;
}
typesMappingStorage['KalturaESearchUserParams'] = KalturaESearchUserParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hVc2VyUGFyYW1zLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaFVzZXJQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7QUFPeEYsTUFBTSwrQkFBZ0MsU0FBUSxvQkFBb0I7Ozs7SUFJOUQsWUFBWSxJQUFvQztRQUU1QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0UsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7U0FDL0csQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLDBCQUEwQixDQUFDLEdBQUcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hVc2VyT3BlcmF0b3IgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoVXNlck9wZXJhdG9yJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoUGFyYW1zLCBLYWx0dXJhRVNlYXJjaFBhcmFtc0FyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoUGFyYW1zJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaFVzZXJQYXJhbXNBcmdzICBleHRlbmRzIEthbHR1cmFFU2VhcmNoUGFyYW1zQXJncyB7XG4gICAgc2VhcmNoT3BlcmF0b3I/IDogS2FsdHVyYUVTZWFyY2hVc2VyT3BlcmF0b3I7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoVXNlclBhcmFtcyBleHRlbmRzIEthbHR1cmFFU2VhcmNoUGFyYW1zIHtcblxuICAgIHNlYXJjaE9wZXJhdG9yIDogS2FsdHVyYUVTZWFyY2hVc2VyT3BlcmF0b3I7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoVXNlclBhcmFtc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaFVzZXJQYXJhbXMnIH0sXG5cdFx0XHRcdHNlYXJjaE9wZXJhdG9yIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaFVzZXJPcGVyYXRvciwgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaFVzZXJPcGVyYXRvcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hVc2VyUGFyYW1zJ10gPSBLYWx0dXJhRVNlYXJjaFVzZXJQYXJhbXM7Il19