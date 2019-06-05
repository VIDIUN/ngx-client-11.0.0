/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionUpdateJobData } from './KalturaDistributionUpdateJobData';
/**
 * @record
 */
export function KalturaDistributionDisableJobDataArgs() { }
export class KalturaDistributionDisableJobData extends KalturaDistributionUpdateJobData {
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
            objectType: { type: 'c', default: 'KalturaDistributionDisableJobData' }
        });
        return result;
    }
}
typesMappingStorage['KalturaDistributionDisableJobData'] = KalturaDistributionDisableJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvbkRpc2FibGVKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGlzdHJpYnV0aW9uRGlzYWJsZUpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0NBQWdDLEVBQXdDLE1BQU0sb0NBQW9DLENBQUM7Ozs7O0FBTzVILE1BQU0sd0NBQXlDLFNBQVEsZ0NBQWdDOzs7O0lBSW5GLFlBQVksSUFBNkM7UUFFckQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1NBQzdFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjtBQUVELG1CQUFtQixDQUFDLG1DQUFtQyxDQUFDLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblVwZGF0ZUpvYkRhdGEsIEthbHR1cmFEaXN0cmlidXRpb25VcGRhdGVKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblVwZGF0ZUpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEaXN0cmlidXRpb25EaXNhYmxlSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblVwZGF0ZUpvYkRhdGFBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURpc3RyaWJ1dGlvbkRpc2FibGVKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblVwZGF0ZUpvYkRhdGEge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEaXN0cmlidXRpb25EaXNhYmxlSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uRGlzYWJsZUpvYkRhdGEnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEaXN0cmlidXRpb25EaXNhYmxlSm9iRGF0YSddID0gS2FsdHVyYURpc3RyaWJ1dGlvbkRpc2FibGVKb2JEYXRhOyJdfQ==