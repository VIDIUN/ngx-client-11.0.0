/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventType } from './KalturaEventType';
import { KalturaCuePoint } from './KalturaCuePoint';
/**
 * @record
 */
export function KalturaEventCuePointArgs() { }
/** @type {?|undefined} */
KalturaEventCuePointArgs.prototype.eventType;
export class KalturaEventCuePoint extends KalturaCuePoint {
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
            objectType: { type: 'c', default: 'KalturaEventCuePoint' },
            eventType: { type: 'es', subTypeConstructor: KalturaEventType, subType: 'KalturaEventType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEventCuePoint.prototype.eventType;
}
typesMappingStorage['KalturaEventCuePoint'] = KalturaEventCuePoint;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV2ZW50Q3VlUG9pbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFdmVudEN1ZVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBdUIsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7OztBQU96RSxNQUFNLDJCQUE0QixTQUFRLGVBQWU7Ozs7SUFJckQsWUFBWSxJQUFnQztRQUV4QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDekUsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUcsa0JBQWtCLEVBQUU7U0FDdkYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50VHlwZSB9IGZyb20gJy4vS2FsdHVyYUV2ZW50VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ3VlUG9pbnQsIEthbHR1cmFDdWVQb2ludEFyZ3MgfSBmcm9tICcuL0thbHR1cmFDdWVQb2ludCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUV2ZW50Q3VlUG9pbnRBcmdzICBleHRlbmRzIEthbHR1cmFDdWVQb2ludEFyZ3Mge1xuICAgIGV2ZW50VHlwZT8gOiBLYWx0dXJhRXZlbnRUeXBlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRXZlbnRDdWVQb2ludCBleHRlbmRzIEthbHR1cmFDdWVQb2ludCB7XG5cbiAgICBldmVudFR5cGUgOiBLYWx0dXJhRXZlbnRUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRXZlbnRDdWVQb2ludEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRXZlbnRDdWVQb2ludCcgfSxcblx0XHRcdFx0ZXZlbnRUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUV2ZW50VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRXZlbnRUeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRXZlbnRDdWVQb2ludCddID0gS2FsdHVyYUV2ZW50Q3VlUG9pbnQ7Il19